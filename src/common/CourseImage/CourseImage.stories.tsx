import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CourseImage, { CourseImageProps } from "./CourseImage";

export default {
    title: "Design System/Atoms/CourseImage",
    component: CourseImage,
    argTypes: {
        subject: {
            control: "radio",
            options: [
                "chemistry",
                "math",
                "literature",
                "biology",
                "history",
                "finance2",
                "writing",
                "economics",
                "finance",
                "finance3",
            ],
            description: "Selects the image subject for the CourseImage component",
        },
    },
} as Meta<typeof CourseImage>;

const Template: StoryFn<typeof CourseImage> = (args) => {
    return <CourseImage {...args} />;
};

export const CourseImageStory = Template.bind({});
CourseImageStory.args = {
    subject: "math",
};
