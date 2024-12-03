import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getMusicList = () => api.get('/music');
export const getMusicById = (id: string) => api.get(`/music/${id}`);
export const createMusic = (data: any) => api.post('/music', data);
export const updateMusic = (id: string, data: any) => api.put(`/music/${id}`, data);
export const deleteMusic = (id: string) => api.delete(`/music/${id}`);