import React from 'react';
import Input from './Input';

export default {
    title: 'Components/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter text...',
};

