# Backend integration prompt — Jervix Internship Portal

Copy the prompt below into your backend project assistant.

---

Implement a production-ready backend module for the Jervix Internship Candidate Portal using the existing framework, database, conventions, authentication, validation, logging, and error-handling patterns in this repository. Do not replace the existing architecture. Inspect the project first and integrate into it cleanly.

## Business flow

1. A student submits an internship registration.
2. The backend validates the fields, prevents duplicate active registrations by email/phone, creates the candidate, and generates a unique immutable candidate ID in the format `JX-YYYY-#####` (example: `JX-2026-48321`). Generate it server-side with a database uniqueness constraint and collision retry; never trust an ID sent by the browser.
3. Return an authenticated candidate session (prefer secure HTTP-only cookies if the project supports them) and the candidate profile. The frontend redirects to `/candidate/dashboard`.
4. The dashboard shows the profile and candidate ID.
5. The candidate creates a training-fee payment order and is redirected to the existing/configured payment gateway checkout.
6. Payment is marked paid only from a verified payment-gateway webhook or a server-to-server verification call. Never trust a frontend success callback alone. Make webhook handling idempotent.
7. After confirmed payment, generate or make available the Welcome Letter and Offer Letter PDFs. Only the owning authenticated candidate and authorized admins may download them. Downloads must be streamed securely or use short-lived signed URLs.

## Candidate fields

- `id`: internal UUID/database primary key
- `candidateId`: unique, indexed, immutable string
- `fullName`: required string
- `email`: required, normalized, valid email
- `phone`: required, normalized phone number
- `dateOfBirth`: required date
- `address`: required string
- `college`: required string
- `course`: required string
- `graduationYear`: required integer
- `domain`: enum: `Web Development`, `App Development`, `UI/UX Design`, `Artificial Intelligence`, `Digital Marketing`, `Human Resources`
- `duration`: enum: `1 Month`, `2 Months`, `3 Months`, `6 Months`
- `startDate`: required date
- `status`: enum with initial value `REGISTERED`
- `paymentStatus`: enum `PENDING`, `PROCESSING`, `PAID`, `FAILED`, `REFUNDED`; initial `PENDING`
- `registeredAt`, `createdAt`, `updatedAt`

Add separate payment and document records rather than storing gateway details or files directly on the candidate. Payment should contain candidate ID, internal order ID, gateway order/payment IDs, amount in the smallest currency unit, currency, status, timestamps, and sanitized gateway metadata. Document should contain candidate ID, type (`WELCOME_LETTER` or `OFFER_LETTER`), version, storage key, MIME type, status, and generated timestamp.

## REST API contract

Use the project's existing API prefix and response envelope where present. Otherwise implement:

- `POST /api/internship/candidates/register`
  - Body: all candidate form fields except IDs/status/timestamps.
  - Returns `201`: `{ candidate, accessToken? }` (omit token when using cookie sessions).
- `GET /api/internship/candidates/me`
  - Auth required. Returns `{ candidate }`, including `candidateId`, profile fields, registration status, and payment status.
- `PATCH /api/internship/candidates/me`
  - Auth required. Allow only editable profile fields; candidate ID, status, payment state, and document state must never be client-editable.
- `POST /api/internship/payments/order`
  - Auth required. Determine fee amount on the server from trusted configuration/domain-duration rules. Return gateway checkout/order information. Reuse an eligible pending order to avoid accidental duplicate payments.
- `POST /api/internship/payments/webhook`
  - Verify the raw request signature using the gateway secret, handle retries idempotently, store the event/order/payment reference, update payment atomically, then enqueue document generation after `PAID`.
- `GET /api/internship/payments/status`
  - Auth required. Return normalized payment status and receipt/reference when available.
- `GET /api/internship/documents`
  - Auth required. Before payment return both expected document types with `locked: true`; after confirmed payment return their readiness and download endpoints.
- `GET /api/internship/documents/:type/download`
  - Auth required. Accept only the two allowed document types. Confirm ownership and paid status, then securely return the PDF. Set safe `Content-Type` and `Content-Disposition` headers.

## Security and reliability

- Apply schema validation and trim/sanitize text input.
- Add rate limiting to registration, login/OTP if added, payment-order creation, and downloads.
- Do not expose internal IDs, storage paths, gateway secrets, raw webhook payloads, or stack traces.
- Configure CORS only for trusted frontend origins and use CSRF protection when cookie authentication requires it.
- Encrypt sensitive data at rest where supported and redact personal/payment data from logs.
- Use database transactions for candidate creation/ID allocation and payment state changes.
- Add authorization middleware and admin role checks for any admin endpoints.
- Store secrets and the training-fee amount in environment/configuration; add documented example variables without real secrets.
- Send a registration confirmation email containing the candidate ID. Send payment confirmation when the verified payment succeeds.

## Document generation

Create branded PDF templates for the Welcome Letter and Offer Letter using the project's supported PDF solution. Include candidate full name, candidate ID, domain, duration, start date, issue date, and authorized signatory placeholder. The Offer Letter should contain the applicable internship terms. Generate asynchronously if a queue exists; otherwise keep the generation service isolated and retry-safe. Never allow user-provided HTML to be rendered unsanitized.

## Frontend integration note

The current React design temporarily stores the demo candidate under localStorage key `jervix_candidate_profile`. Replace that behavior with `POST /api/internship/candidates/register`, then load dashboard data from `GET /api/internship/candidates/me`. Replace the training-fee alert with payment-order creation and gateway checkout. Replace document alerts with the documents list and authenticated downloads. Remove local candidate-ID generation entirely once this backend is connected.

## Deliverables

Implement migrations/schema, models, repositories/services, controllers/routes, validation, authentication/authorization integration, payment gateway adapter and verified webhook, PDF document service, email notifications, configuration examples, and automated tests. Tests must cover candidate-ID uniqueness, invalid registration, duplicate submission, access control, amount tampering, invalid webhook signature, webhook replay/idempotency, payment state transitions, locked documents before payment, and authorized document download after payment. Finish by listing changed files, migration/run commands, required environment variables, endpoint examples, and any assumptions.
