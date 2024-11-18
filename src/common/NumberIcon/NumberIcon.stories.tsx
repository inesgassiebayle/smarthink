import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NumberIcon, {NumberIconProps} from './NumberIcon';

export default {
    title: 'Design System/Atoms/NumberIcon',
    component: NumberIcon,
    argTypes: {
        number: {
            control: { type: 'number', min: 0, max: 9 },
            description: 'The number to display inside the circle',
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "select" },
            description: "Icon size",
        },
        colorClass: {table: {disable: true}},
    },
} as Meta<typeof NumberIcon>;

const Template: StoryFn<NumberIconProps> = (args) => <NumberIcon {...args} />;

export const NumberIconStory = Template.bind({});
NumberIconStory.args = {
    number: 3,
    size: "medium",
};
