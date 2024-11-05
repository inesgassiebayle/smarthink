import React, {useState} from 'react';
import {Meta, StoryFn} from '@storybook/react';
import AnswerIcon from './AnswerIcon';

const meta: Meta<typeof AnswerIcon> = {
    title: 'Design System/Atoms/AnswerIcon',
    component: AnswerIcon,
    argTypes: {
        state: {
            control: {
                type: 'select',
                options: ['incorrect', 'correct'],
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
        }
    },
};
export default meta;

const Template: StoryFn<typeof AnswerIcon> = (args) => {


    return (
        <AnswerIcon
            {...args}
        />
    );
};

export const AnswerIconStory = Template.bind({});
AnswerIconStory.args = {
    state: 'correct',
    shape: 'circle',
    filled: false,
};
