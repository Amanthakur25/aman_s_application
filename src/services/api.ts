// API service layer for handling HTTP requests
import { PujaCard, User } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  }

  // Auth API methods
  async login(email: string, password: string): Promise<User> {
    return this.request<User>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(email: string, password: string, name?: string): Promise<User> {
    return this.request<User>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  async logout(): Promise<void> {
    return this.request<void>('/auth/logout', {
      method: 'POST',
    });
  }

  // Puja API methods
  async getPujas(): Promise<PujaCard[]> {
    return this.request<PujaCard[]>('/pujas');
  }

  async getPujaById(id: string): Promise<PujaCard> {
    return this.request<PujaCard>(`/pujas/${id}`);
  }

  async createPuja(puja: Omit<PujaCard, 'id'>): Promise<PujaCard> {
    return this.request<PujaCard>('/pujas', {
      method: 'POST',
      body: JSON.stringify(puja),
    });
  }

  async updatePuja(id: string, puja: Partial<PujaCard>): Promise<PujaCard> {
    return this.request<PujaCard>(`/pujas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(puja),
    });
  }

  async deletePuja(id: string): Promise<void> {
    return this.request<void>(`/pujas/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();