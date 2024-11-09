import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Podium, { PodiumProps } from "./Podium";
import animal1 from '../../assets/panda.webp';
import animal2 from '../../assets/dog.webp';
import animal3 from '../../assets/cat.webp';

export default {
    title: 'Design System/Atoms/Podium',
    component: Podium,
    argTypes: {
        first: {
            control: { type: 'text' },
            description: 'URL of the first place avatar',
        },
        first_username: {
            control: { type: 'text' },
            description: 'Username of the first place',
        },
        second: {
            control: { type: 'text' },
            description: 'URL of the second place avatar',
        },
        second_username: {
            control: { type: 'text' },
            description: 'Username of the second place',
        },
        third: {
            control: { type: 'text' },
            description: 'URL of the third place avatar',
        },
        third_username: {
            control: { type: 'text' },
            description: 'Username of the third place',
        },
    },
} as Meta<typeof Podium>;

const Template: StoryFn<PodiumProps> = (args) => <Podium {...args} />;

export const PodiumStory = Template.bind({});
PodiumStory.args = {
    first: animal1,
    first_username: '@janedoe',
    second: animal2,
    second_username: '@johnsmith',
    third: animal3,
    third_username: '@alicejohnson',
};
