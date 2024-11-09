import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import QuestionBox from "./QuestionBox";

export default {
    title: "Design System/Atoms/QuestionBox",
    component: QuestionBox,
    argTypes: {
        title: {
            control: { type: "text" },
            description: "The title of the question.",
        },
        body: {
            control: { type: "text" },
            description: "The body text of the question.",
        },
        variant: {
            control: "radio",
            options: ["default", "pressed", "answered"],
            description: "The style variant of the question box.",
        },
    },
} as Meta<typeof QuestionBox>;

const Template: StoryFn<typeof QuestionBox> = (args) => {
    return <QuestionBox {...args} />;
};

export const DefaultVariant = Template.bind({});
DefaultVariant.args = {
    title: "¿Cuál es tu color favorito?",
    body: "Esta es una pregunta simple para que respondas.",
    variant: "default",
};