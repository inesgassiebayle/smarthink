import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DaySelector, { DaySelectorProps } from './DaySelector';

export default {
    title: 'Design System/Atoms/DaySelector',
    component: DaySelector,
    argTypes: {
        day: {
            control: 'select',
            options: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        },
    },
} as Meta;

const Template: StoryFn<DaySelectorProps> = (args) => <DaySelector {...args} />;

export const DaySelectorStory = Template.bind({});
DaySelectorStory.args = {
    day: 'M',
};
