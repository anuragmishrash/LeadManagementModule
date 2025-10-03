export interface Lead {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source: 'Website' | 'Ad' | 'Referral' | 'Event' | 'Other' | 'Social Media' | 'Cold Call' | 'Email Campaign';
  notes?: string;
  optIn: boolean;
  status: 'New' | 'Qualified' | 'Converted' | 'Follow-Up' | 'Lost';
  qualification: 'High School' | 'Bachelors' | 'Masters' | 'PhD' | 'Other';
  interest: 'Web Development' | 'Mobile Development' | 'Data Science' | 'Digital Marketing' | 'UI/UX Design' | 'Other';
  assignedTo?: string;
  city?: string;
  passoutYear?: number;
  heardFrom?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  source: 'Website' | 'Ad' | 'Referral' | 'Event' | 'Other' | 'Social Media' | 'Cold Call' | 'Email Campaign';
  notes: string;
  optIn: boolean;
  status: 'New' | 'Qualified' | 'Converted' | 'Follow-Up' | 'Lost';
  qualification: 'High School' | 'Bachelors' | 'Masters' | 'PhD' | 'Other';
  interest: 'Web Development' | 'Mobile Development' | 'Data Science' | 'Digital Marketing' | 'UI/UX Design' | 'Other';
  assignedTo: string;
  city: string;
  passoutYear: number;
  heardFrom: string;
}