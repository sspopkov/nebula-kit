import React from 'react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    children: 'Tertiary Button',
    type: 'tertiary',
};

