import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Logo, { LogoProps } from './Logo';
import logoImage from '../../assets/smartthinkLogo.jpg';

export default {
    title: 'Design System/Atoms/Logo',
    component: Logo,
    argTypes: {
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium', 'large'],
            },
            description: 'Size of the logo',
            defaultValue: 'medium',
        },
    },
} as Meta<typeof Logo>;

const Template: StoryFn<LogoProps> = (args) => <Logo {...args} />;

export const LogoStory = Template.bind({});
LogoStory.args = {
    size: 'small',
};
