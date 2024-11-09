import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import dog from '../../assets/dog.webp';
import penguin from '../../assets/pinguin.webp';
import panda from '../../assets/panda.webp';

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
            control: {
                type: 'select',
                options: {
                    Dog: dog,
                    Panda: panda,
                    Penguin: penguin,
                },
            },
            description: 'Source of the avatar image',
        },
    },
} as Meta<typeof Avatar>;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarStory = Template.bind({});
AvatarStory.args = {
    imageSrc: dog,
    size: 'medium',
};
