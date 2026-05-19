export const employeeSizes = [
  '1-25 employees',
  '26-100 employees',
  '101-500 employees',
  '500+ employees',
];

export const requestDemoSuccessMessage =
  'Thank you for your interest. Our team will review your details and contact you shortly to schedule your demo.';

const defaultWebsiteLeadEndpoint = import.meta.env.DEV
  ? 'http://localhost:3000/api/website-leads'
  : 'https://api.jervix.com/api/website-leads';

const websiteLeadEndpoint =
  import.meta.env.VITE_WEBSITE_LEAD_ENDPOINT || defaultWebsiteLeadEndpoint;

type LeadResponse = {
  message?: string;
};

export type SubmitStatus = 'idle' | 'success' | 'error';

export async function submitWebsiteLead(form: HTMLFormElement) {
  const formData = new FormData(form);
  const phone = String(formData.get('phone') || '').trim();

  const response = await fetch(websiteLeadEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      organizationName: String(formData.get('organizationName') || '').trim(),
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
      employeeSize: String(formData.get('employeeSize') || '').trim(),
    }),
  });

  const result = await response.json().catch(() => null) as LeadResponse | null;

  if (!response.ok) {
    throw new Error(result?.message || 'Unable to submit your request right now.');
  }
}
