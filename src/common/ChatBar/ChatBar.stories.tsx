import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ChatBar from "./ChatBar";

const meta: Meta<typeof ChatBar> = {
    title: "Design System/Atoms/ChatBar",
    component: ChatBar,
};

export default meta;

const Template: StoryFn<typeof ChatBar> = (args) => {
    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    return <ChatBar {...args} text={text} onTextChange={handleTextChange} />;
};

export const Default = Template.bind({});
Default.args = {
    text: '',
};
