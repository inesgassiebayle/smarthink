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
            options: ["horizontal", "iconTick", "circularProgress"], // Variantes posibles
            control: { type: "radio" }, // Control para elegir la variante
            description: "The variant of the Module Card to display",
        },
        teacher: {
            control: { type: "text" },
            description: "The name of the teacher",
        },
        title: {
            control: { type: "text" },
            description: "The title of the course",
        },
        subject: {
            control: { type: "text" },
            description: "The subject name",
        },
        avatarSource: {
            control: { type: "text" },
            description: "URL for the teacher's avatar image",
        },
        courseSource: {
            control: { type: "text" },
            description: "URL for the course image",
        },
        progress: {
            control: { type: "number", min: 0, max: 100, step: 1 },
            description: "Progress value for the Circular Progress Bar (0-100)",
            if: { arg: "variant", eq: "circularProgress" }, // Aparece solo cuando la variante es 'circularProgress'
        },
        onClick: {
            action: "clicked",
            description: "Function to handle card click",
        },
    },
    args: {
        variant: "horizontal", // Valor por defecto
        teacher: "Jane Doe",
        title: "Introduction to Mathematics",
        subject: "Mathematics",
        avatarSource: avatarImage,
        courseSource: courseImage,
        progress: 80, // Valor de progreso por defecto para circularProgress
    },
} as Meta<ModuleCardProps>;

const Template: StoryFn<ModuleCardProps> = (args) => (
    <div>
        <ModuleCard {...args} />
    </div>
);

export const DefaultModuleCard = Template.bind({});
