import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ChatBar from "./ChatBar";

const meta: Meta<typeof ChatBar> = {
    title: "Design System/Atoms/ChatBar",
    component: ChatBar,
};

export default meta;

const Template: StoryFn<typeof ChatBar> = (args) => <ChatBar {...args} />;

export const Default = Template.bind({});
Default.args = {};