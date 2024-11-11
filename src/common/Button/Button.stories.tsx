import Button from "./Button";
import { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Design System/Atoms/Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["filled", "outlined", "textButton"],
            control: { type: "select" },
            description: "Button style variant (filled, outlined, or text)",
            defaultValue: "filled",
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "select" },
            description: "Button size (small, medium, large)",
            defaultValue: "medium",
        },
        disabled: {
            control: { type: "boolean" },
            description: "Disables the button",
            defaultValue: false,
        },
        fill: {
            control: { type: "boolean" },
            description: "Icon is filled or not",
            defaultValue: false,
        },
        icon: {
            options: [
                null, // Add a null option to represent no icon
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
                "smiley",
                "confetti",
                "unlocked",
                "empty",
            ],
            control: { type: "select" },
            description: "Icon variant to display",
        },
        onClick: { action: "clicked" },
    },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => {
    const iconProps = args.icon ? { variant: args.icon, size: args.size } : undefined;

    return (
        <Button {...args} iconProps={iconProps}>
            {args.children}
        </Button>
    );
};

export const ButtonStory = Template.bind({});
ButtonStory.args = {
    variant: "filled",
    size: "medium",
    children: "Button",
    disabled: false,
    icon: null,
    fill: false,
    onClick: () => {
        console.log("Button clicked");
    },
};
