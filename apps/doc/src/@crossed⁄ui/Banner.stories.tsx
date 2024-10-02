import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Banner } from '@crossed/ui/src/feedback/Banner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Banner> = {
  title: '@crossed⁄ui/Banner',
  component: Banner,
  subcomponents: {
    'Banner.Description': Banner.Description,
    'Banner.Icon': Banner.Icon,
    'Banner.Title': Banner.Title,
    'Banner.Action': Banner.Action,
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'error', 'success', 'warning'],
    },
    space: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    center: { control: 'boolean' },
  },
  render: (e) => (
    <Banner {...e}>
      <Banner.Icon />
      <Banner.Description>Description</Banner.Description>
    </Banner>
  ),
};

export default meta;
type Story = StoryObj<typeof Banner>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    status: 'info',
    center: false,
  },
};
