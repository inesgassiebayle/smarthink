import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeaderIcon, { HeaderIconProps } from "./HeaderIcon";

export default {
    title: "Design System/Atoms/HeaderIcon",
    component: HeaderIcon,
    argTypes: {
        variant: {
            control: "radio",
            options: ["menu", "explore", "empty"],
            defaultValue: "menu",
            description: "Select the type of icon to display.",
        },
        onClick: { table: { disable: true } },
    },
} as Meta<typeof HeaderIcon>;

const Template: StoryFn<HeaderIconProps> = (args) => <HeaderIcon {...args} />;

export const HeaderIconStory = Template.bind({});
HeaderIconStory.args = {
    variant: "menu",
};
