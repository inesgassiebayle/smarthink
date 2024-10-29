import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProgressBar from "./ProgressBar";

export default {
    title: "Design System/Atoms/ProgressBar",
    component: ProgressBar,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['linear', 'circle'],
            description: 'Select the type of progress bar',
        },
        progress: {
            control: { type: 'number', min: 0, max: 100 },
            description: 'Progress percentage (0 to 100)',
        },
    },
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const ProgressBarStory = Template.bind({});
ProgressBarStory.args = {
    variant: "linear",
    progress: 50,
};