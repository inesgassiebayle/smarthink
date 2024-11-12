import { Meta, StoryObj } from '@storybook/react';
import {BubbleIcon} from "./BubbleIcons";


const meta: Meta<typeof BubbleIcon> = {
    title: 'Design System/Atoms/BubbleIcon',
    component: BubbleIcon,
    argTypes: {
        variant: {
            options: [
                'clock',
                'paper_clip',
            ],
            control: { type: 'select' },
            description: 'Variante del ícono a mostrar',
        },
    },
};

export default meta;
type Story = StoryObj<typeof BubbleIcon>;

export const Default: Story = {
    args: {
        variant: 'clock'
    },
};