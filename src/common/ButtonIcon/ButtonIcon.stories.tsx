import { Meta, StoryFn } from "@storybook/react";
import ButtonIcon, { ButtonIconProps } from "./ButtonIcon";
import { useState } from "react";

export default {
    title: "Design System/Atoms/ButtonIcon",
    component: ButtonIcon,
    argTypes: {
        variant: {
            control: { type: "select" },
            options: [
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
                "switch",
            ],
        },
        size: {
            control: { type: "select" },
        },
        colorClass: { control: "color" }
    }
} as Meta<typeof ButtonIcon>;

const Template: StoryFn<ButtonIconProps> = (args) => {
    const [filled, setFilled] = useState(false);

    const handleClick = () => {
        setFilled((prevFilled) => !prevFilled);
    };

    return (
        <ButtonIcon
            {...args}
            onClick={handleClick}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    variant: "heart",
    size: "medium",
    colorClass: "text-primary-500"
};
