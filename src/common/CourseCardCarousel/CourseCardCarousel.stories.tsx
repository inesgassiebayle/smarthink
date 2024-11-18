import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CourseCardCarousel from "./CourseCardCarousel";
import { CourseCardProps } from "../CourseCard/CourseCard";
import physics from "../../assets/physics.jpg";
import math from "../../assets/math.jpg";
import literature from "../../assets/literature.webp";
import woman1 from "../../assets/woman1.jpg";
import man1 from "../../assets/avatar-boy1.jpg";
import man2 from "../../assets/man2.jpg";
import statistics from "../../assets/statistics.jpg";

export default {
    title: "Design System/Atoms/CourseCardCarousel",
    component: CourseCardCarousel,
    argTypes: {
        variant: {
            control: "radio",
            options: ["horizontal", "vertical"],
            description: "Controls the layout of the carousel",
        },
        courses: { table: { disable: true } },
        onCourseClick: { table: { disable: true } },
    },
} as Meta<typeof CourseCardCarousel>;

const coursesData: Omit<CourseCardProps, 'variant'>[] = [
    {
        id: "1",
        teacher: "Jane Doe",
        title: "William Shakespeare",
        subject: "Literature",
        avatarSource: woman1,
        courseSource: literature,
    },
    {
        id: "2",
        teacher: "John Smith Richardson",
        title: "Physics Basics",
        subject: "Physics",
        avatarSource: man1,
        courseSource: physics,
    },
    {
        id: "3",
        teacher: "Tom Doe",
        title: "Derivatives",
        subject: "Math",
        avatarSource: man2,
        courseSource: math,
    },
    {
        id: "4",
        teacher: "Jane Doe",
        title: "Poisson Distribution",
        subject: "Statistics",
        avatarSource: woman1,
        courseSource: statistics,
    },
];

const Template: StoryFn<typeof CourseCardCarousel> = (args) => {
    return (
            <CourseCardCarousel {...args} onCourseClick={(id) => alert(`Course with id ${id} clicked`)}/>
    );
};

export const CourseCarouselStory = Template.bind({});
CourseCarouselStory.args = {
    courses: coursesData,
    variant: "horizontal",
};
