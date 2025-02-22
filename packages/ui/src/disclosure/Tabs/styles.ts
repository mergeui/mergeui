/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

import { createStyles } from '@crossed/styled';
import { SharedValue } from 'react-native-reanimated';

export const indicatorUnderlineStyles = createStyles(({ colors }) => ({
  active: { base: { borderBottomColor: colors.border.brand } },
  default: {
    base: {
      borderBottomWidth: 4,
      height: 4,
      borderBottomColor: 'transparent',
      borderRadius: 4,
      position: 'absolute',
      bottom: 0,
    },
  },
}));

export const linearGradientRounded = createStyles(({ colors }) => ({
  prev: {
    base: {
      left: 0,
      background: `linear-gradient(to right, ${colors.background.primary} 70%, transparent)`,
    },
  },
  next: {
    base: {
      right: 0,
      background: `linear-gradient(to left, ${colors.background.primary} 70%, transparent)`,
    },
  },
}));
export const linearGradientUnderline = createStyles(({ colors }) => ({
  prev: {
    base: {
      left: 0,
      background: `linear-gradient(to right, ${colors.background.secondary} 70%, transparent)`,
    },
  },
  next: {
    base: {
      right: 0,
      background: `linear-gradient(to left, ${colors.background.secondary} 70%, transparent)`,
    },
  },
}));

export const indicatorRoundedStyles = createStyles(({ colors }) => ({
  active: { base: { backgroundColor: colors.background.secondary } },
  default: {
    base: {
      backgroundColor: 'transparent',
      borderRadius: 24,
      position: 'absolute',
    },
    web: {
      base: { boxShadow: '0px 1px 4px 0px #1018280A' },
    },
  },
}));

export const indicatorDynamicStyles = createStyles(() => ({
  dyn: (left: SharedValue<number>, width: SharedValue<number>) =>
    ({ width, transform: [{ translateX: left }] }) as any,
}));

export const tabTitleStyles = createStyles(({ colors }) => ({
  default: { base: { color: colors.text.secondary } },
  hover: { base: { color: colors.text.primary } },
  active: { base: { color: colors.text.brand } },
}));

export const triggerStyles = createStyles(({ space }) => ({
  disabled: {
    base: { opacity: 0.5, pointerEvents: 'none' },
    web: { base: { cursor: 'not-allowed' } },
  },
  trigger: {
    base: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
  sm: { base: { paddingHorizontal: space.xs } },
  md: { base: { paddingHorizontal: space.md } },
  lg: { base: { paddingHorizontal: space.lg } },
}));

export const heightStyles = createStyles(() => ({
  sm: { base: { height: 28 } },
  md: { base: { height: 36 } },
  lg: { base: { height: 44 } },
}));

export const focusStyles = createStyles(({ colors }) => ({
  rounded: {
    web: {
      ':focus-visible': {
        outlineColor: colors.border.brand,
        outlineOffset: '4px',
      },
    },
  },
  underline: {
    web: {
      ':focus-visible': {
        outlineColor: colors.border.brand,
        outlineOffset: '4px',
      },
    },
  },
}));
