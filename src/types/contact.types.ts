export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Anti-bot field
}

export interface ContactInfo {
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  location?: string;
  website?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}
