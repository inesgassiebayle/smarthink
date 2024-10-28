import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SubjectTag from "./SubjectTag";
import Button from "../Button/Button";

export default {
    title: "Design System/Atoms/SubjectTag",
    component: SubjectTag,
    argTypes: {
        subject: {
            control: { type: "text" },
            description: "The subject name to display in the tag",
            defaultValue: "Mathematics",
        },
    },
} as Meta;

const Template: StoryFn<typeof SubjectTag> = (args) => {

    return (
        <SubjectTag {...args}>
        </SubjectTag>
    );
};
export const Default = Template.bind({});
Default.args = {
    subject: "Mathematics",
};
