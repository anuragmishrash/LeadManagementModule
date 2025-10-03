import axios from 'axios';
import { Lead, LeadFormData } from '../types/Lead';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const leadApi = {
  // Get all leads
  getLeads: async (): Promise<Lead[]> => {
    const response = await api.get('/leads');
    return response.data;
  },

  // Create a new lead
  createLead: async (leadData: LeadFormData): Promise<Lead> => {
    const response = await api.post('/leads', leadData);
    return response.data;
  },

  // Delete a lead
  deleteLead: async (id: string): Promise<void> => {
    await api.delete(`/leads/${id}`);
  },
};

export default api;