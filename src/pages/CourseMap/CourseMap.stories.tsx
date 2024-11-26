import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CourseMap, { CourseMapProps } from './CourseMap';
import environment from '../../assets/environment.png'

const meta: Meta<typeof CourseMap> = {
    title: 'Design System/Pages/CourseMap',
    component: CourseMap,
    argTypes: {
        progress: {table: {disable: true}},
        title: {table: {disable: true}},
        modules: {table: {disable: true}},
        moduleReached: {table: {disable: true}},
        onModuleClick: {table: {disable: true}},
        moduleState: {table: {disable: true}},
        courseSrc: {table: {disable: true}},
        level: {table: {disable: true}},
        points: {table: {disable: true}},
    }
};

export default meta;

const Template: StoryFn<CourseMapProps> = (args) => <CourseMap {...args} onModuleClick={(id) => alert(`Module with id ${id} clicked`)} />;

export const DefaultCourseMap = Template.bind({});
DefaultCourseMap.args = {
    title: 'Environment Basic Concepts',
    modules: [
        { title: 'Climate Change', id: '1'},
        { title: 'RRR: Reduce, Recycle and Reuse', icon: 'star', id: '2' },
        { title: 'Air Pollution' , id: '3'},
        { title: 'Noise Pollution', id: '4' },
        { title: 'Water Pollution' , id: '5'},
        { title: 'Deforestation', id: '6' },
        { title: 'Soil Erosion', id: '7' },
        { title: 'Renewable Energy', id: '8' },
        { title: 'Sustainable Living', id: '9' },
        { title: 'Environment and Health', icon: 'star', id: '10' },
    ],
    moduleReached: 5,
    moduleState: 'in-progress',
    level: 5,
    progress: 50,
    points: 500,
    courseSrc: environment,
};

