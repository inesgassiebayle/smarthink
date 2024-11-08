import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CourseMap, { CourseMapProps } from './CourseMap';
import environment from '../../assets/environment.png'

const meta: Meta<typeof CourseMap> = {
    title: 'Design System/Pages/CourseMap',
    component: CourseMap
};

export default meta;

const Template: StoryFn<CourseMapProps> = (args) => <CourseMap {...args} />;

export const DefaultCourseMap = Template.bind({});
DefaultCourseMap.args = {
    title: 'Environment Basic Concepts',
    modules: [
        { title: 'Climate Change'},
        { title: 'RRR: Reduce, Recycle and Reuse', icon: 'star'},
        { title: 'Air Pollution' },
        { title: 'Noise Pollution'},
        { title: 'Water Pollution' },
        { title: 'Deforestation'},
        { title: 'Soil Erosion'},
        { title: 'Renewable Energy'},
        { title: 'Sustainable Living' },
        { title: 'Environment and Health', icon: 'star'},
    ],
    moduleReached: 5,
    moduleState: 'in-progress',
    level: 5,
    progress: 50,
    points: 500,
    courseSrc: environment,
};

