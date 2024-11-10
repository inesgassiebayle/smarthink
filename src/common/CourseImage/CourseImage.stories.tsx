import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CourseImage, { CourseImageProps } from './CourseImage';

export default {
    title: 'Components/CourseImage',
    component: CourseImage,
    argTypes: {
        subject: {
            control: {
                type: 'select',
                options: [
                    'chemistry',
                    'math',
                    'literature',
                    'biology',
                    'history',
                    'finance2',
                    'writing',
                    'economics',
                    'finance',
                    'finance3',
                ],
            },
        },
    },
} as Meta;

const Template: StoryFn<CourseImageProps> = (args) => <CourseImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    subject: 'math', // Default subject
};
