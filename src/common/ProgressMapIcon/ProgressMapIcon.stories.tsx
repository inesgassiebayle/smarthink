import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressMapIcon, { ProgressMapIconProps } from './ProgressMapIcon';

export default {
    title: 'Design System/Atoms/ProgressMapIcon',
    component: ProgressMapIcon,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['default', 'in-progress', 'completed'],
            },
        },
        state: {
            control: {
                type: 'select',
                options: ['end', 'middle'],
            },
        },
    },
} as Meta<ProgressMapIconProps>;

const Template: StoryFn<ProgressMapIconProps> = (args) => <ProgressMapIcon {...args} />;

export const ProgressMapIconStory = Template.bind({});
ProgressMapIconStory.args = {
    variant: 'default',
    state: 'end',
};
