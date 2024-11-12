import type { Meta, StoryObj } from '@storybook/react';
import DaySelector from './DaySelector';

const meta: Meta<typeof DaySelector> = {
    title: 'Design System/Atoms/DaySelector',
    component: DaySelector,
    argTypes: {
        day: {
            control: 'select',
            options: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
            description: 'Day of the week'
        },
    },
};

export default meta;

type Story = StoryObj<typeof DaySelector>;

export const Default: Story = {
    args: {
        day: 'monday'
    },
};