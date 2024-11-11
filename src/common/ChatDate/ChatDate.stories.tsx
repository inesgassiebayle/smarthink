import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ChatDate, { ChatDateProps } from "./ChatDate";

const meta: Meta<typeof ChatDate> = {
    title: "Design System/Atoms/ChatDate",
    component: ChatDate,
    argTypes: {
        title: { control: 'text' },
    },
};

export default meta;

const Template: StoryFn<ChatDateProps> = (args) => <ChatDate {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "November 11, 2024",
};
