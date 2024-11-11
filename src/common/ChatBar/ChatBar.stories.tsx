import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ChatBar from "./ChatBar";

const meta: Meta<typeof ChatBar> = {
    title: "Design System/Atoms/ChatBar",
    component: ChatBar,
};

export default meta;

const Template: StoryFn<typeof ChatBar> = (args) => {
    return <ChatBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    text: '',
    onClickAdd: () => alert("Add button clicked"),
    onClickEmoji: () => alert("Emoji button clicked"),
    onClickMic: () => alert("Mic button clicked"),
    onClickSend: () => alert("Send button clicked"),
};
