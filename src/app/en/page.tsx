import type { Metadata } from 'next';
import { LandingPage } from '@/components/site/LandingPage';
import { enMetadata } from '../metadata';

export const metadata: Metadata = enMetadata;

export default function EnglishPage() {
  return <LandingPage locale="en" />;
}
