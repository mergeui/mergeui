import { Pressable, Text } from 'react-native';
import { styled, withStaticProperties } from '@mergeui/core';

const ButtonFrame = styled(Pressable, {
  base: {
    styles: [],
    props: {
      as: 'a',
      dataSet: { test: 'test' },
    },
  },
});
const ButtonText = styled(Text, {});

const Button = withStaticProperties(ButtonFrame, { Text: ButtonText });

export const StyledDemo = () => {
  return (
    <Button>
      <Button.Text>Hello</Button.Text>
    </Button>
  );
}
