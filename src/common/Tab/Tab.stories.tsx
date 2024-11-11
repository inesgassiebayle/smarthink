import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tab from "./Tab";

const meta: Meta<typeof Tab> = {
    title: "Design System/Atoms/Tab",
    component: Tab,
    argTypes: {
        state: {
            options: ["default", "active"],
            control: { type: "radio" },
            description: "State of the tab (default or active)",
            defaultValue: "default",
        },
        children: {
            control: { type: "text" },
            description: "Content of the tab",
            defaultValue: "Tab Label",
        },
    },
};

export default meta;

const Template: StoryFn<typeof Tab> = (args) => <Tab {...args}/>;

export const TabStory = Template.bind({});
TabStory.args = {
    state: "default",
    children: "Inactive",
};
