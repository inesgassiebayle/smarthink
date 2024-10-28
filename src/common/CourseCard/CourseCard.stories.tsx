
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CourseCard, { CourseCardProps } from "./CourseCard";
import avatarImage from "../../assets/avatar-boy1.jpg";
import courseImage from "../../assets/statistics.jpg";

export default {
    title: "Design System/Molecules/CourseCard",
    component: CourseCard,
    argTypes: {
        variant: {
            options: ["horizontal", "vertical"],
            control: { type: "radio" },
            description: "Layout variant of the card (horizontal or vertical)",
            defaultValue: "horizontal",
        },
        teacher: {
            control: { type: "text" },
            description: "The name of the teacher",
            defaultValue: "Jane Doe",
        },
        title: {
            control: { type: "text" },
            description: "The title of the course",
            defaultValue: "Introduction to Mathematics",
        },
        subject: {
            control: { type: "text" },
            description: "The subject name",
            defaultValue: "Mathematics",
        },
        avatarSource: {
            control: { type: "text" },
            description: "URL for the teacher's avatar image",
            defaultValue: "https://via.placeholder.com/24",
        },
    },
} as Meta<CourseCardProps>;

const Template: StoryFn<CourseCardProps> = (args) => <CourseCard {...args} />;

export const CourseCardStory = Template.bind({});
CourseCardStory.args = {
    variant: "horizontal",
    teacher: "Jane Doe",
    title: "Introduction to Mathematics",
    subject: "Mathematics",
    avatarSource: avatarImage,
    courseSource: courseImage,
};

