export const serviceInterests = [
  'Web Development',
  'Digital Marketing',
  'Blockchain Development',
  'Mobile App Development',
  'AI Development',
  'SaaS Development',
  'Not sure yet',
];

export const requestDemoSuccessMessage =
  'Thank you for sharing your project details. Our team will review your service requirement and contact you shortly with the next steps.';

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
      serviceInterest: String(formData.get('serviceInterest') || '').trim(),
      projectBrief: String(formData.get('projectBrief') || '').trim(),
    }),
  });

  const result = await response.json().catch(() => null) as LeadResponse | null;

  if (!response.ok) {
    throw new Error(result?.message || 'Unable to submit your request right now.');
  }
}
