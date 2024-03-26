/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

import * as React from 'react';
import { type StylableComponent, withStaticProperties } from '@crossed/core';
import { createStyles } from './createStyles';
import { useStyles } from './useStyles';
import type { CreateStyleParams, CrossedPropsExtended } from './types';

export const withStyle = <P extends Record<string, any>, S extends StyleSheet>(
  Comp: StylableComponent<P>,
  styleParams: S
) => {
  const styleThemed = createStyles({ root: styleParams });
  return withStaticProperties(
    React.forwardRef<
      any,
      CrossedPropsExtended<
        S extends (_params: any) => infer SF ? SF : S
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore props is define by user
      >['props'] &
        P
    >(function WithStyled(props, ref) {
      const { root } = useStyles(styleThemed, props as any);
      return <Comp ref={ref} {...props} {...root} />;
    }),
    { styleSheet: styleThemed }
  );
};
