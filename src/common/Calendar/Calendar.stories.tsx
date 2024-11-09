import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CalendarComponent, { CalendarComponentProps } from './Calendar';

export default {
    title: 'Design System/Atoms/CalendarComponent',
    component: CalendarComponent,
    argTypes: {
        initialDate: {
            control: { type: 'date' },
            description: 'Initial selected date on the calendar',
            defaultValue: new Date(),
        },
        className: {
            control: { type: 'text' },
            description: 'Additional CSS classes for custom styling',
        },
    },
} as Meta<typeof CalendarComponent>;

const Template: StoryFn<CalendarComponentProps> = (args) => <CalendarComponent onDateChange={(newDate: Date) => console.log("Selected date:", newDate)} {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialDate: new Date(),
    className: '',
};
