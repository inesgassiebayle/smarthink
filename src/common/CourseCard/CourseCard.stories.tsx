import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CourseCard, { CourseCardProps } from "./CourseCard";
import avatarImage from "../../assets/avatar-boy1.jpg";
import courseImage from "../../assets/statistics.jpg";

export default {
    title: "Design System/Atoms/CourseCard",
    component: CourseCard,
    argTypes: {
        variant: {
            options: ["horizontal", "vertical"],
            control: { type: "radio" },
            description: "Layout variant of the card (horizontal or vertical)",
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
        id: { table: { disable: true } },
        onClick: { table: { disable: true } },

    },
    args: {
        variant: "horizontal",
        teacher: "Jane Doe",
        title: "Introduction to Mathematics",
        subject: "Mathematics",
        avatarSource: avatarImage,
        courseSource: courseImage,
    },
} as Meta<CourseCardProps>;

const Template: StoryFn<CourseCardProps> = (args) => (
    <div>
        <CourseCard {...args} />
    </div>
);

export const CourseCardStory = Template.bind({});
