import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import sampleImage from '../../assets/avatar-boy1.jpg';

export default {
    title: 'Design System/Atoms/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            control: {
                type: 'radio',
                options: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
            },
            description: 'Size of the avatar',
        },
        imageSrc: {
            control: { type: 'text' },
            description: 'URL of the image for the avatar',
        },
    },
} as Meta<typeof Avatar>;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarStory = Template.bind({});
AvatarStory.args = {
    imageSrc: sampleImage,
    size: 'medium',
};
