import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Home, { HomeProps } from "./Home";
import { CategoryCoursesProps } from "../../common/CategoryCourses/CategoryCourses";
import girl1 from "../../assets/woman1.jpg";
import statistics from "../../assets/statistics.jpg";
import boy1 from "../../assets/avatar-boy1.jpg";
import boy2 from "../../assets/boy2.jpg";
import boy3 from "../../assets/boy3.jpg";
import girl2 from "../../assets/girl2.jpeg";
import girl3 from "../../assets/girl3.jpg";
import literature from "../../assets/literature.webp";
import environment from "../../assets/environment.png";
import chemistry from "../../assets/chemestry.jpeg";
import math from "../../assets/math.jpg";
import physics from "../../assets/physics.jpg";

export default {
    title: "Design System/Pages/Home",
    component: Home,
} as Meta<typeof Home>;

const Template: StoryFn<HomeProps> = (args) => <Home {...args} />;

const sampleCategories: Map<string, CategoryCoursesProps & { id: string }> = new Map([
    [
        "1",
        {
            id: "1",
            title: "Continue with your courses",
            courses: [
                {
                    id: "1",
                    teacher: "Jane Doe",
                    title: "William Shakespeare",
                    subject: "Literature",
                    avatarSource: girl1,
                    courseSource: literature,
                },
                {
                    id: "2",
                    teacher: "John Smith",
                    title: "Poisson Distribution",
                    subject: "Statistics",
                    avatarSource: boy1,
                    courseSource: statistics,
                },
                {
                    id: "3",
                    teacher: "Tom Brown",
                    title: "Environmental Science",
                    subject: "Biology",
                    avatarSource: boy2,
                    courseSource: environment,
                },
            ],
            onCourseClick: (id: string) => console.log(`Course ${id} clicked`),
            onCategoryClick: () => console.log("Continue category clicked"),
        },
    ],
    [
        "2",
        {
            id: "2",
            title: "Trending topics",
            courses: [
                {
                    id: "4",
                    teacher: "Alice Johnson",
                    title: "Introduction to Mathematics",
                    subject: "Math",
                    avatarSource: girl2,
                    courseSource: math,
                },
                {
                    id: "5",
                    teacher: "Tom Brown",
                    title: "Chemistry Basics",
                    subject: "Chemistry",
                    avatarSource: boy2,
                    courseSource: chemistry,
                },
                {
                    id: "6",
                    teacher: "John Doe",
                    title: "Physics Basics",
                    subject: "Physics",
                    avatarSource: boy3,
                    courseSource: physics,
                },
            ],
            onCourseClick: (id: string) => console.log(`Course ${id} clicked`), // Added `onCourseClick`
            onCategoryClick: () => console.log("Trending category clicked"),
        },
    ],
    [
        "3",
        {
            id: "3",
            title: "Popular Courses",
            courses: [
                {
                    id: "7",
                    teacher: "Jane Doe",
                    title: "Literature Mastery",
                    subject: "Literature",
                    avatarSource: girl1,
                    courseSource: literature,
                },
                {
                    id: "8",
                    teacher: "Alice Johnson",
                    title: "Advanced Statistics",
                    subject: "Statistics",
                    avatarSource: girl3,
                    courseSource: statistics,
                },
                {
                    id: "9",
                    teacher: "Tom Brown",
                    title: "Biology Insights",
                    subject: "Biology",
                    avatarSource: boy2,
                    courseSource: environment,
                },
            ],
            onCourseClick: (id: string) => console.log(`Course ${id} clicked`), // Added `onCourseClick`
            onCategoryClick: () => console.log("Popular category clicked"),
        },
    ],
    [
        "4",
        {
            id: "4",
            title: "New Courses",
            courses: [
                {
                    id: "10",
                    teacher: "John Smith",
                    title: "Introduction to Chemistry",
                    subject: "Chemistry",
                    avatarSource: boy1,
                    courseSource: chemistry,
                },
                {
                    id: "11",
                    teacher: "Tom Brown",
                    title: "Physics Intermediate",
                    subject: "Physics",
                    avatarSource: boy2,
                    courseSource: physics,
                },
                {
                    id: "12",
                    teacher: "Alice Johnson",
                    title: "Advanced Mathematics",
                    subject: "Math",
                    avatarSource: girl3,
                    courseSource: math,
                },
            ],
            onCourseClick: (id: string) => console.log(`Course ${id} clicked`), // Added `onCourseClick`
            onCategoryClick: () => console.log("New category clicked"),
        },
    ],
]);

export const DefaultHome = Template.bind({});
DefaultHome.args = {
    categories: sampleCategories,
    onCategoryClick: (id: string) => alert(`Category ${id} clicked`),
};
