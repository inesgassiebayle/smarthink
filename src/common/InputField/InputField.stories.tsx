import InputField from "./InputField";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof InputField> = {
    title: "Design System/Atoms/InputField",
    component: InputField,
    argTypes: {
        state: {
            options: ["default", "error", "disabled"],
            control: { type: "select" },
            description: "State of the input field",
            defaultValue: "default",
        },
        icon: {
            options: [
                null,
                "explore",
                "bookmark",
                "heart",
                "people",
                "switch_left",
                "switch_right",
                "tick",
                "clock",
                "correct_circle",
                "correct_square",
                "incorrect_circle",
                "incorrect_square",
                "star",
                "close",
                "add",
                "paper_clip",
                "download",
                "chat",
                "chat_multiple",
                "calendar",
                "search",
                "pencil",
                "folder",
                "bell",
                "prize",
                "export",
                "circle",
                "square",
                "profile",
                "pin",
                "video",
                "image",
                "pause",
                "play",
                "back",
                "menu",
                "home",
                "text",
                "mic",
                "smily",
                "confetti",
                "unlocked",
                "empty",
            ],
            control: { type: "select" },
            description: "Optional icon to display on the right",
        },
        placeholder: {
            control: { type: "text" },
            defaultValue: "Input name",
        },
    },
};

export default meta;

const Template: StoryFn<typeof InputField> = (args) => {
    const [value, setValue] = useState("");

    const iconProps = args.icon ? { variant: args.icon, size: "medium" } : undefined;

    return (
        <InputField
            {...args}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            icon={args.icon}
            iconProps={iconProps}
        />
    );
};

export const InputFieldStory = Template.bind({});
InputFieldStory.args = {
    state: "default",
    placeholder: "Input name",
    value: "",
    disabled: false,
    icon: null,
};
