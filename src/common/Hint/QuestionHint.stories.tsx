import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import QuestionHint, { QuestionHintProps } from "./QuestionHint";
import avatarImage from '../../assets/girl3.jpg';

export default {
    title: "Design System/Atoms/QuestionHint",
    component: QuestionHint,
    argTypes: {
        hintText: {
            control: { type: "text" },
            description: "Text for the hint label",
            defaultValue: "Hint",
        },
        questionText: {
            control: { type: "text" },
            description: "Main text of the question",
            defaultValue: "Consider Macbeth’s motivations throughout the play. What drives him to make his most significant decisions, and how does this ultimately lead to his downfall?",
        },
        personName: {
            control: { type: "text" },
            description: "Name of the person (author of the question)",
            defaultValue: "Tom Doe",
        },
        avatarSrc: {
            control: { type: "text" },
            description: "URL or path to the avatar image",
            defaultValue: avatarImage,
        },
    },
} as Meta;

const Template: StoryFn<QuestionHintProps> = (args) => <QuestionHint {...args} />;

export const Default = Template.bind({});
Default.args = {
    hintText: "Hint",
    questionText: "Consider Macbeth’s motivations throughout the play. What drives him to make his most significant decisions, and how does this ultimately lead to his downfall?",
    personName: "Jane Doe",
    avatarSrc: avatarImage,
};
