// Common types used across the application

export interface PujaCard {
  id: string;
  image: string;
  title: string;
  temple: string;
  description: string;
  date: string;
  isNew?: boolean;
  shareLabel?: string;
}

export interface HoroscopeCard {
  id: string;
  icon: string;
  name: string;
  dateRange: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  location: string;
  datetime: string;
  isHighlighted?: boolean;
}

export interface Testimonial {
  id: string;
  avatar: string;
  name: string;
  role: string;
  rating: string;
  testimonial: string;
}

export interface Article {
  id: string;
  image: string;
  date: string;
  author: string;
  comments: string;
  title: string;
  excerpt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  mobile?: string;
  role?: string;
  is_active?: boolean;
  email_verified?: boolean;
  created_at?: string;
  updated_at?: string;
  isAuthenticated?: boolean;
  // OAuth2 token fields
  access_token?: string;
  token_type?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface UIState {
  isLoginModalOpen: boolean;
  isMobileMenuOpen: boolean;
  isLoading: boolean;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

// User Dashboard Types
export interface UserPuja {
  id: string;
  title: string;
  temple: string;
  date: string;
  time: string;
  status: 'completed' | 'upcoming' | 'processing';
  amount: number;
  image: string;
  videoUrl?: string;
  certificateUrl?: string;
}

export interface UserOrder {
  id: string;
  orderNumber: string;
  date: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  total: number;
  status: 'delivered' | 'shipped' | 'processing' | 'cancelled';
  trackingNumber?: string;
}

export interface UserProfile {
  personalInfo: {
    name: string;
    email: string;
    mobile: string;
    dateOfBirth?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
  };
  spiritualInfo: {
    favoriteDeities: string[];
    birthTime?: string;
    birthPlace?: string;
    gotra?: string;
  };
}