import type { Meta, StoryObj } from '@storybook/react';
import CalendarComponent from '../Calendar/Calendar';

const meta: Meta<typeof CalendarComponent> = {
    title: 'Common/Calendar',
    component: CalendarComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CalendarComponent>;

export const Default: Story = {
    args: {
        initialDate: new Date(),
    },

};