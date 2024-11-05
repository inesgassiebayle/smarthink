import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
    title: "Design System/Atoms/Icon",
    component: Icon,
    argTypes: {
        variant: {
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
            control: { type: "select" },
            description: "Icon variant to display",
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "select" },
            description: "Icon size",
        },
        fill: {
            control: { type: "boolean" },
            description: "Filled version of the icon (if applicable)",
        },
    },
    args: {
        variant: "bookmark",
        size: "medium",
        fill: false,
    },
};

export default meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const IconStory = Template.bind({});
IconStory.args = {
    variant: 'bookmark',
    size: 'medium',
    fill: false,
};