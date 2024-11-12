import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WeekSelector, { WeekSelectorProps } from './WeekSelector';

export default {
    title: 'Design System/Atoms/WeekSelector',
    component: WeekSelector,
} as Meta;

const Template: StoryFn<WeekSelectorProps> = (args) => (
    <div className="p-4">
        <WeekSelector {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    onChange: (days) => console.log('Selected days:', days),
};