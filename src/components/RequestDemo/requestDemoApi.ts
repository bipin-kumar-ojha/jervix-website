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

export const careerRoles = [
  'Business Development Executive Intern',
  'Full Stack Developer Intern',
  'Blockchain Developer Intern',
  'Solidity Developer Intern',
  'UI/UX Designer Intern',
  'Social Media Marketing Intern',
  'HR Intern',
  'Account Intern',
];

export const careerEnquirySuccessMessage =
  'Thank you for sharing your career enquiry. Our team will review your profile and contact you if there is a suitable next step.';

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

export async function submitCareerLead(form: HTMLFormElement) {
  const formData = new FormData(form);
  const phone = String(formData.get('phone') || '').trim();
  const role = String(formData.get('role') || '').trim();
  const currentStatus = String(formData.get('currentStatus') || '').trim();
  const portfolio = String(formData.get('portfolio') || '').trim();
  const skills = String(formData.get('skills') || '').trim();
  const message = String(formData.get('message') || '').trim();

  const response = await fetch(websiteLeadEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      leadType: 'career',
      organizationName: 'Career Enquiry',
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
      serviceInterest: role,
      projectBrief: [
        `Career role: ${role}`,
        currentStatus ? `Current status: ${currentStatus}` : '',
        portfolio ? `Portfolio / resume: ${portfolio}` : '',
        skills ? `Skills / tools: ${skills}` : '',
        message ? `Message: ${message}` : '',
      ].filter(Boolean).join('\n'),
    }),
  });

  const result = await response.json().catch(() => null) as LeadResponse | null;

  if (!response.ok) {
    throw new Error(result?.message || 'Unable to submit your career enquiry right now.');
  }
}
