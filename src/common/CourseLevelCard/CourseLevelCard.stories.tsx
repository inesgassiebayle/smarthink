import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import sampleImage from "../../assets/statistics.jpg";
import CourseLevelCard from "./CourseLevelCard";

export default {
    title: "Design System/Atoms/CourseCard",
    component: CourseLevelCard,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['standard', 'leveled'],
            description: 'Controls the layout of the course card.',
        },
        level: {
            control: { type: 'number', min: 1, max: 10 },
            description: 'The level to display (for leveled variant).',
        },
        progress: {
            control: { type: 'number', min: 0, max: 100 },
            description: 'Progress percentage (0 to 100)',
        },
        points: {
            control: { type: 'number', min: 0, max: 1000 },
            description: 'The points acquired (for leveled variant).',
        },
        title: {
            control: { type: 'text' },
            description: 'The title of the course (for standard variant).',
        },
    },
} as Meta<typeof CourseLevelCard>;

const Template: StoryFn<typeof CourseLevelCard> = (args) => {
    return (<CourseLevelCard {...args} />
    )
}

export const CourseLevelStory = Template.bind({});
CourseLevelStory.args = {
    variant: "standard",
    progress: 70,
    title: "Course Name",
    courseSource: sampleImage,
};
