import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DaySelector, { DaySelectorProps } from './DaySelector';

export default {
    title: 'Components/DaySelector',
    component: DaySelector,
    argTypes: {
        dia: {
            control: 'select',
            options: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        },
        selected: {
            control: 'boolean',
        },
    },
} as Meta;

const Template: StoryFn<DaySelectorProps> = (args) => <DaySelector {...args} />;

export const Selected = Template.bind({});
Selected.args = {
    day: 'M', // Puedes elegir el día que desees
    selected: true,
};

export const NotSelected = Template.bind({});
NotSelected.args = {
    day: 'T',
    selected: false,
};

export const AllSelected = Template.bind({});
AllSelected.args = {
    day: 'S',
    selected: true,
};

export const AllNotSelected = Template.bind({});
AllNotSelected.args = {
    day: 'F',
    selected: false,
};
