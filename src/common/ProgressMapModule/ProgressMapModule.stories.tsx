import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressMapModule, { ProgressMapModuleProps } from './ProgressMapModule';

const meta: Meta<ProgressMapModuleProps> = {
    title: 'Design System/Atoms/ProgressMapModule',
    component: ProgressMapModule,
    argTypes: {
        variant: {
            options: ['default', 'in-progress', 'completed'],
            control: { type: 'select' },
            description: 'Variant of the ProgressMapModule',
        },
        state: {
            options: ['end', 'middle'],
            control: { type: 'select' },
            description: 'State of the ProgressMapModule',
        },
        icon: {
            options: [
                null,
                "explore", "bookmark", "heart", "people", "switch_left", "switch_right", "tick", "clock",
                "correct_circle", "correct_square", "incorrect_circle", "incorrect_square", "star", "close",
                "add", "paper_clip", "download", "chat", "chat_multiple", "calendar", "search", "pencil",
                "folder", "bell", "prize", "export", "circle", "square", "profile", "pin", "video", "image",
                "pause", "play", "back", "menu", "home", "text", "mic", "smiley", "confetti", "unlocked", "empty"
            ],
            control: { type: 'select' },
            description: 'Icon variant to be displayed, or null for no icon',
        },
        onClick: { table: { disable: true } },
    },
    args: {
        title: 'Default - End',
        variant: 'default',
        state: 'end',
        icon: 'explore',
    },
};

export default meta;

const Template: StoryFn<ProgressMapModuleProps> = (args) => {
    return <ProgressMapModule {...args} onClick={() => alert("Module should open")}/>;
};

export const ProgressMapModuleStory = Template.bind({});
ProgressMapModuleStory.args = {
    title: 'Default - End',
    variant: 'default',
    state: 'end',
    icon: 'explore',
};
