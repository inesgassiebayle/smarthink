import { Meta, StoryObj } from "@storybook/react";
import UserProfile, { UserProfileProps } from "./UserProfile";
import avatarImage from "../../assets/girl3.jpg";

const meta: Meta<UserProfileProps> = {
    title: "Design System/Atoms/UserProfile",
    component: UserProfile,
    argTypes: {
        name: { control: "text" },
        avatarSrc: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<UserProfileProps>;

export const Default: Story = {
    args: {
        name: "janedoe",
        avatarSrc: avatarImage,
    },
};
