import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CategoryCourses, { CategoryCoursesProps } from "./CategoryCourses";
import { CourseCardProps } from "../CourseCard/CourseCard";
import physics from "../../assets/physics.jpg";
import math from "../../assets/math.jpg";
import literature from "../../assets/literature.webp";
import woman1 from "../../assets/woman1.jpg";
import man1 from "../../assets/avatar-boy1.jpg";
import man2 from "../../assets/man2.jpg";
import statistics from "../../assets/statistics.jpg";


export default {
    title: "Design System/Molecules/CategoryCourses",
    component: CategoryCourses,
    argTypes: {
        title: {
            control: { type: "text" },
            description: "Title of the category",
            defaultValue: "Featured Courses",
        },
        onClick: {
            action: "clicked",
            description: "Handler for the 'View All' button click",
        },
    },
} as Meta<typeof CategoryCourses>;

const coursesData: Omit<CourseCardProps, 'variant'>[] = [
    {
        teacher: "Jane Doe",
        title: "William Shakespeare",
        subject: "Literature",
        avatarSource: woman1,
        courseSource: literature,
    },
    {
        teacher: "John Smith Richardson",
        title: "Physics Basics",
        subject: "Physics",
        avatarSource: man1,
        courseSource: physics,
    },
    {
        teacher: "Tom Doe",
        title: "Derivatives",
        subject: "Math",
        avatarSource: man2,
        courseSource: math,
    },
    {
        teacher: "Jane Doe",
        title: "Poisson Distribution",
        subject: "Statistics",
        avatarSource: woman1,
        courseSource: statistics,
    },
];

const Template: StoryFn<CategoryCoursesProps> = (args) => <CategoryCourses {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Featured Courses",
    courses: coursesData,
    onClick: () => console.log("View All button clicked"),
};