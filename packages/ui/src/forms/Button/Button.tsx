/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

'use client';

import {
  composeStyles,
  createStyles,
  CrossedMethods,
  withReactive,
} from '@crossed/styled';
import { createButton } from '@crossed/primitive';
import {
  ActivityIndicator,
  Pressable,
  View,
  type PressableProps,
} from 'react-native';
import { Text as TextUi, type TextProps } from '../../typography/Text';
import { type GetProps, withDefaultProps } from '@crossed/core';
import { XBox } from '../../layout/XBox';
import { Box } from '../../layout/Box';
import {
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
  type PropsWithChildren,
} from 'react';
import { buttonErrorStyles, buttonSizeStyles, buttonStyles } from './styles';

const buttonContext = createContext<
  Pick<ButtonProps, 'variant' | 'error' | 'disabled'> & {
    state?: {
      active?: boolean;
      hover?: boolean;
    };
  }
>({});

export const textStyles = createStyles((t) => ({
  default: {
    base: { fontWeight: 'bold' },
  },
  disabled: { base: { pointerEvents: 'none' } },
  primary: {
    'base': { color: t.components.Action.primary.default.text },
    ':hover': { color: t.components.Action.primary.hover.text },
    ':active': { color: t.components.Action.primary.active.text },
  },
  secondary: {
    'base': { color: t.components.Action.secondary.default.text },
    ':hover': { color: t.components.Action.secondary.hover.text },
    ':active': { color: t.components.Action.secondary.active.text },
  },
  tertiary: {
    'base': { color: t.components.Action.tertiary.default.text },
    ':hover': { color: t.components.Action.tertiary.hover.text },
    ':active': { color: t.components.Action.tertiary.active.text },
  },
  false: {},
}));

export const textDisabledStyles = createStyles((t) => ({
  primary: {
    base: { color: t.components.Action.primary.disabled.text },
  },
  secondary: {
    base: { color: t.components.Action.secondary.disabled.text },
  },
  tertiary: {
    base: { color: t.components.Action.tertiary.disabled.text, opacity: 0.5 },
  },
  false: {},
}));

const textErrorStyles = createStyles((t) => ({
  primary: {
    base: { color: 'white' },
  },
  secondary: {
    'base': { color: t.colors.error.primary },
    ':hover': { color: t.colors.error.muted },
    ':active': { color: t.colors.error.satured },
    ':disabled': { color: t.colors.error.hight },
  },
  tertiary: {
    'base': { color: t.colors.error.primary },
    ':hover': { color: t.colors.error.muted },
    ':active': { color: t.colors.error.satured },
    ':disabled': { color: t.colors.error.hight },
  },
}));
const textErrorDisabledStyles = createStyles((t) => ({
  primary: {
    base: { color: 'white' },
  },
  secondary: {
    base: { color: t.colors.error.hight },
  },
  tertiary: {
    base: { color: t.colors.error.hight },
  },
}));

const Group = XBox;

type Variants = 'primary' | 'tertiary' | 'secondary' | false;
export type ButtonProps = Omit<PressableProps, 'style'> & {
  /**
   * Select button variant
   * @default primary
   */
  variant?: Variants;
  /**
   * Select error colors
   * @type {boolean}
   */
  error?: boolean;
  /**
   * Loading state of button
   * @type {boolean}
   */
  loading?: boolean;
  /**
   * Extend style of button
   * @type {boolean}
   */
  style?: CrossedMethods<any>;
  /**
   * Disable size
   * @type {boolean}
   */
  size?: boolean;
};

const Root = withReactive(
  forwardRef<View, ButtonProps>(
    (
      {
        variant = 'primary',
        error = false,
        disabled,
        loading,
        size = true,
        children,
        ...props
      },
      ref
    ) => {
      const renderLoading = loading ? (
        <ButtonIcon>
          <ActivityIndicator />
        </ButtonIcon>
      ) : null;

      return (
        <Pressable
          disabled={disabled || loading}
          ref={ref}
          {...props}
          style={(e: any) =>
            composeStyles(
              buttonStyles.root,
              buttonSizeStyles[size.toString()],
              variant && buttonStyles[variant],
              (disabled || loading) &&
                variant &&
                buttonStyles[variant][':disabled'] && {
                  base: buttonStyles[variant][':disabled'],
                },
              error && buttonErrorStyles.error,
              variant && error && buttonErrorStyles[variant],
              (disabled || loading) &&
                variant &&
                error &&
                buttonErrorStyles[variant][':disabled'] && {
                  base: buttonErrorStyles[variant][':disabled'],
                },
              props.style
            ).rnw({
              hover: e.hovered,
              active: e.pressed,
              disabled: disabled || loading,
            }).style
          }
        >
          {(e: any) => {
            return (
              <buttonContext.Provider
                value={{
                  variant,
                  error,
                  state: { active: e.pressed, hover: e.hovered },
                  disabled: disabled || loading,
                }}
              >
                {renderLoading}
                {typeof children === 'function' ? children(e) : children}
              </buttonContext.Provider>
            );
          }}
        </Pressable>
      );
    }
  )
);

const Text = withReactive(
  forwardRef<any, TextProps>((props, ref) => {
    const { variant, error, state, disabled } = useContext(buttonContext);

    return (
      <TextUi
        weight="lg"
        {...props}
        disabled={disabled}
        {...state}
        style={composeStyles(
          textStyles.default,
          variant && textStyles[variant],
          disabled && textStyles.disabled,
          disabled && variant && textDisabledStyles[variant],
          variant && error && textErrorStyles[variant],
          disabled && variant && error && textErrorDisabledStyles[variant],
          props.style
        )}
        ref={ref}
      />
    );
  })
);

const Icon = ({
  children,
  style,
}: PropsWithChildren<{ style?: CrossedMethods<any> }>) => {
  const { variant, error, state, disabled } = useContext(buttonContext);

  const color = useMemo(() => {
    return composeStyles(
      textStyles.default,
      variant && textStyles[variant],
      disabled && textStyles.disabled,
      disabled && variant && textDisabledStyles[variant],
      variant && error && textErrorStyles[variant],
      disabled && variant && error && textErrorDisabledStyles[variant],
      style
    ).style(state).style.color;
  }, [variant, error, disabled, state]);

  return isValidElement(children)
    ? cloneElement(children, { color } as any)
    : children;
};

const Element = Box;

const Button = createButton({
  Group,
  Root: withDefaultProps(Root, { variant: 'primary' }),
  Text,
  Element,
  Icon,
});

const { Text: ButtonText, Element: ButtonElement, Icon: ButtonIcon } = Button;

export { ButtonText, ButtonElement, Button, ButtonIcon };
export type ButtonTextProps = GetProps<typeof ButtonText>;
