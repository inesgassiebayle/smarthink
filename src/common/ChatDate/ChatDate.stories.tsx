import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ChatDate from "./ChatDate";

const meta: Meta<typeof ChatDate> = {
    title: "Design System/Atoms/ChatDate", // Ajusta el título según tu jerarquía de Storybook
    component: ChatDate,
};

export default meta;

const Template: StoryFn<typeof ChatDate> = (args) => <ChatDate {...args} />;

export const Default = Template.bind({});
Default.args = {};