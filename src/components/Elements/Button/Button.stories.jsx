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

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
}

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  type: 'primary',
  label: 'Button',
}

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  type: 'primary',
  label: 'Button',
}