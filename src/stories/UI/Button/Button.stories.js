import React from 'react';
import Button from '../../../components/UI/Button/Button';
import {btnPrimaryData , btnSecondaryData, btnWarningData, btnDangerData} from '../../../components/UI/Button/Button.mock';

export default {
    title: 'React Packages/UI/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = btnPrimaryData;

export const Secondary = Template.bind({})
Secondary.args = btnSecondaryData;

export const Warning = Template.bind({})
Warning.args = btnWarningData;

export const Danger = Template.bind({})
Danger.args = btnDangerData;
