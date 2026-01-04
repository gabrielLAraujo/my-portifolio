export type Language = 'pt' | 'en';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ToastVariant {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  id?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}
