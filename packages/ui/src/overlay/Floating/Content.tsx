/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

import Animated, { AnimatedProps } from 'react-native-reanimated';
import { View, ViewProps } from 'react-native';
import { forwardRef, memo, RefAttributes } from 'react';
import { composeStyles, CrossedMethods, inlineStyle } from '@crossed/styled';
import { useFloatingContext } from './context';
import { positionStyles } from '../../styles/position';

export type FloatingContentProps = Partial<AnimatedProps<ViewProps>> & {
  /**
   * Crossed style
   */
  style?: CrossedMethods<any>;
  /**
   * Animated view style
   */
  animatedStyle?: AnimatedProps<ViewProps>['style'];
};

export const FloatingContent = memo<FloatingContentProps & RefAttributes<View>>(
  forwardRef<View, FloatingContentProps>(
    ({ style, animatedStyle, ...props }, ref) => {
      const { open } = useFloatingContext();

      return open ? (
        <Animated.View
          {...props}
          style={[
            composeStyles(
              inlineStyle(() => ({ base: { zIndex: 1 } })),
              open && positionStyles.absoluteFill,
              style
            ).style().style,
            animatedStyle,
          ]}
          ref={ref}
        />
      ) : null;
    }
  )
);
FloatingContent.displayName = 'Floating.Content';
