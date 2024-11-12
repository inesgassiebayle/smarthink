import type { Meta, StoryObj } from '@storybook/react';
import ModuleDescription from './ModuleDescription';

const meta: Meta<typeof ModuleDescription> = {
    title: 'Design System/Atoms/ModuleDescription',
    component: ModuleDescription,
    tags: ['autodocs'],
    argTypes: {
        description: {
            control: 'text',
            description: 'Texto de la descripción',
        },
    },
};

export default meta;

type Story = StoryObj<typeof ModuleDescription>;

export const Default: Story = {
    args: {
        description: 'Module description and topics here.',
    },
};