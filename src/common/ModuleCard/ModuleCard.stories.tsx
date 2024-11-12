import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ModuleCard, { ModuleCardProps } from "./ModuleCard";
import avatarImage from "../../assets/avatar-boy1.jpg";
import courseImage from "../../assets/statistics.jpg";

export default {
    title: "Design System/Atoms/ModuleCard",
    component: ModuleCard,
    argTypes: {
        variant: {
            options: ["horizontal", "iconTick", "circularProgress"],
            control: { type: "radio" },
            description: "The variant of the Module Card to display",
        },
        title: {
            control: { type: "text" },
            description: "The title of the course",
        },
        courseSource: {
            control: { type: "text" },
            description: "URL for the course image",
        },
        progress: {
            control: { type: "number", min: 0, max: 100, step: 1 },
            description: "Progress value for the Circular Progress Bar (0-100)",
            if: { arg: "variant", eq: "circularProgress" },
        },
        onClick: {
            action: "clicked",
            description: "Function to handle card click",
        },
    },
    args: {
        variant: "horizontal",
        teacher: "Jane Doe",
        title: "Introduction to Mathematics",
        subject: "Mathematics",
        avatarSource: avatarImage,
        courseSource: courseImage,
        progress: 80,
    },
} as Meta<ModuleCardProps>;

const Template: StoryFn<ModuleCardProps> = (args) => (
    <div>
        <ModuleCard {...args} onClick={() => alert("Open module card")} />
    </div>
);

export const DefaultModuleCard = Template.bind({});
