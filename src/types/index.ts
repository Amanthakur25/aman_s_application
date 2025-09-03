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
  id: string;
  email: string;
  name?: string;
  phone?: string;
  isAuthenticated: boolean;
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