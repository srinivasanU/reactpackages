import React from 'react';
import Input from '../../../components/UI/Input/Input';
import {textInputData , passwordInputData, emailInputData} from '../../../components/UI/Input/Input.mock';

export default {
    title: 'React Packages/UI/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Username = Template.bind({})
Username.args = textInputData;

export const Password = Template.bind({})
Password.args = passwordInputData;

export const Email = Template.bind({})
Email.args = emailInputData;