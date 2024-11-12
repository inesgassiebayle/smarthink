import type { Meta, StoryObj } from '@storybook/react';
import WeekSelector from './WeekSelector';

const meta: Meta<typeof WeekSelector> = {
    title: 'Design System/Atoms/WeekSelector',
    component: WeekSelector,
};

export default meta;

type Story = StoryObj<typeof WeekSelector>;

export const Default: Story = {
    args: {
        onChange: (days) => console.log('Selected days:', days),
    },
};