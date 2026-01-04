import { z } from 'zod';

/**
 * Email validation schema
 */
export const emailSchema = z.string().email('Email inválido').toLowerCase().trim();

/**
 * URL validation schema
 */
export const urlSchema = z.string().url('URL inválida').trim();

/**
 * Phone validation schema (Brazilian format)
 */
export const phoneSchema = z
  .string()
  .regex(
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
    'Telefone inválido'
  )
  .optional();

/**
 * Name validation schema
 */
export const nameSchema = z
  .string()
  .min(2, 'Nome muito curto')
  .max(100, 'Nome muito longo')
  .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Nome contém caracteres inválidos')
  .trim();

/**
 * Generic string validation with length limits
 */
export function createStringSchema(
  minLength: number,
  maxLength: number,
  fieldName: string = 'Campo'
) {
  return z
    .string()
    .min(minLength, `${fieldName} deve ter pelo menos ${minLength} caracteres`)
    .max(maxLength, `${fieldName} deve ter no máximo ${maxLength} caracteres`)
    .trim();
}

/**
 * Validate email
 */
export function validateEmail(email: string) {
  return emailSchema.safeParse(email);
}

/**
 * Validate URL
 */
export function validateUrl(url: string) {
  return urlSchema.safeParse(url);
}

/**
 * Validate phone
 */
export function validatePhone(phone: string) {
  return phoneSchema.safeParse(phone);
}

/**
 * Validate name
 */
export function validateName(name: string) {
  return nameSchema.safeParse(name);
}
