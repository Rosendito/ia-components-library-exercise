import React from 'react';
import { Button, types, sizes } from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    type: { control: 'select', options: Object.keys(types) },
    size: { control: 'select', options: Object.keys(sizes) },
    label: { control: 'text', defaultValue: 'Button' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

