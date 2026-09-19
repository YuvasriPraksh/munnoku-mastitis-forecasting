import { mockApi } from './mockApi';
import type { AnimalDashboardData, HerdSummary, Prediction } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA !== 'false'; // default to mock

export const api = {
  getHerdSummary: async (): Promise<HerdSummary> => {
    if (USE_MOCK) return mockApi.getHerdSummary();
    const res = await fetch('/api/herd-summary');
    return res.json();
  },
  
  getAnimals: async () => {
    if (USE_MOCK) return mockApi.getAnimals();
    const res = await fetch('/api/animals');
    return res.json();
  },
  
  getAnimalDetails: async (id: string): Promise<AnimalDashboardData> => {
    if (USE_MOCK) return mockApi.getAnimalDetails(id);
    const res = await fetch(`/api/animals/${id}`);
    return res.json();
  },
  
  getAlerts: async (): Promise<Prediction[]> => {
    if (USE_MOCK) return mockApi.getAlerts();
    const res = await fetch('/api/alerts');
    return res.json();
  },
  
  recordVerification: async (data: any): Promise<boolean> => {
    if (USE_MOCK) return mockApi.recordVerification(data);
    const res = await fetch('/api/verifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.ok;
  }
};
