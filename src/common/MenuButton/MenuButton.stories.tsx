import { Meta, StoryObj } from "@storybook/react";
import MenuButton, { MenuButtonProps } from "./MenuButton";

const meta: Meta<MenuButtonProps> = {
    title: "Design System/Atoms/MenuButton",
    component: MenuButton,
    argTypes: {
        variant: {
            control: "select",
            options: ["logout", "courses", "membership", "profile", "certificates", "notifications"],
        },
        onClick: { table: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<MenuButtonProps>;

export const Default: Story = {
    args: {
        variant: "logout",
        onClick: () => alert("Button clicked"),

    },
};

