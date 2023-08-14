import { View } from 'react-native';
import { styled } from '@crossed/core';
import { spaceVariants } from '../variants/space';

export const XBox = styled(View, {
  className: ['flex', 'flex-row'],
  variants: {
    space: spaceVariants,
  },
});
