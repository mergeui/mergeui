/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

import { Text, type TextProps } from './Text';
import { createStyles } from '@crossed/styled';

const useP = createStyles((t) => ({
  root: {
    base: {
      alignSelf: 'stretch',
      marginVertical: t.space.md,
    },
  },
}));

export const P = (props: TextProps) => {
  const { root } = useP(props);
  return <Text role="paragraph" {...props} {...root} />;
};
