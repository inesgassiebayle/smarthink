import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CourseCard, { CourseLevelCardProps } from "./CourseLevelCard";
import sampleImage from "../../assets/statistics.jpg";

export default {
    title: "Design System/Molecules/CourseCard",
    component: CourseCard,
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
} as Meta<typeof CourseCard>;

const Template: StoryFn<typeof CourseCard> = (args) => {
    return (
        <div className="w-[344px]">
            <CourseCard {...args} />
        </div>
    )
}

export const CourseLevelStory = Template.bind({});
CourseLevelStory.args = {
    variant: "standard",
    progress: 70,
    title: "Course Name",
    courseSource: sampleImage,
};
