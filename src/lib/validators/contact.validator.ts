import { z } from 'zod';

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Nome contém caracteres inválidos'),

  email: z
    .string()
    .email('Email inválido')
    .min(5, 'Email muito curto')
    .max(255, 'Email muito longo')
    .toLowerCase(),

  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres')
    .trim(),

  honeypot: z.string().optional(), // Anti-bot field - should be empty
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

/**
 * Validate contact form data
 */
export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}
