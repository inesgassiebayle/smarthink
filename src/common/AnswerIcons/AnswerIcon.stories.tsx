import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AnswerIcon from './AnswerIcon';

const meta: Meta<typeof AnswerIcon> = {
    title: 'Design System/Atoms/AnswerIcon',
    component: AnswerIcon,
    argTypes: {
        state: {
            control: {
                type: 'select',
                options: ['incorrect', 'correct', 'default'],
            },
        },
        shape: {
            control: {
                type: 'select',
                options: ['circle', 'square'],
            },
        },
        filled: {
            control: {
                type: 'boolean',
            },
        },
        clickable: {
            control: {
                type: 'boolean',
            },
        },
    },
};
export default meta;

const Template: StoryFn<typeof AnswerIcon> = (args) => <AnswerIcon {...args} />;

export const AnswerIconStory = Template.bind({});
AnswerIconStory.args = {
    state: 'correct',
    shape: 'circle',
    filled: false,
};
