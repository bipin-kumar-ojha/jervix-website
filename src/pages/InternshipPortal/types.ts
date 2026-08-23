export type CandidateProfile = {
  candidateId: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  college: string;
  course: string;
  graduationYear: string;
  domain: string;
  duration: string;
  startDate: string;
  address: string;
  status: 'Registered';
  paymentStatus: 'Pending' | 'Paid';
  registeredAt: string;
};

export const PROFILE_KEY = 'jervix_candidate_profile';

export const makeCandidateId = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `JX-${year}-${random}`;
};
