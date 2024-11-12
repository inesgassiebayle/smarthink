import { Meta, StoryObj } from '@storybook/react';
import {BubbleIcon} from "./BubbleIcons";


const meta: Meta<typeof BubbleIcon> = {
    title: 'Design System/Atoms/BubbleIcon',
    component: BubbleIcon,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'clock',
                'paper_clip',
                'explore',
                'bookmark',
                'heart',
                'people',
                'switch_left',
                'switch_right',
                'tick',
                'correct_circle',
                'correct_square',
                'incorrect_circle',
                'incorrect_square',
                'star',
                'close',
                'add',
                'download',
                'chat',
                'chat_multiple',
                'calendar',
                'search',
                'pencil',
                'folder',
                'bell',
                'prize',
                'export',
                'circle',
                'square',
                'profile',
                'pin',
                'video',
                'image',
                'pause',
                'play',
                'back',
                'menu',
                'home',
                'text',
                'mic',
                'smiley',
                'confetti',
                'unlocked',
                'empty',
                'switch',
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