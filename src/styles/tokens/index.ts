/**
 * Design System - Central Token Export
 *
 * Exports all design tokens from a single location
 */

import type { ColorToken } from './colors';
import type { TypographyToken } from './typography';
import type { SpacingToken } from './spacing';
import type { ShadowToken } from './shadows';
import type { BorderRadiusToken } from './border-radius';
import type { AnimationToken } from './animations';

export { colors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { shadows } from './shadows';
export { borderRadius } from './border-radius';
export { animation } from './animations';

export type {
  ColorToken,
  TypographyToken,
  SpacingToken,
  ShadowToken,
  BorderRadiusToken,
  AnimationToken,
};

export interface DesignTokens {
  colors: ColorToken;
  typography: TypographyToken;
  spacing: SpacingToken;
  shadows: ShadowToken;
  borderRadius: BorderRadiusToken;
  animation: AnimationToken;
}
