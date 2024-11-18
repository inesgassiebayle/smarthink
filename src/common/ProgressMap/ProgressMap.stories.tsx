import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressMap, { ProgressMapProps } from './ProgressMap';

const meta: Meta<typeof ProgressMap> = {
    title: 'Design System/Atoms/ProgressMap',
    component: ProgressMap,
    argTypes: {
        moduleState: {
            options: ['default', 'in-progress'],
            control: { type: 'select' },
            description: 'State of the currently reached module',
        },
        moduleReached: {
            control: { type: 'number' },
            description: 'Index of the currently reached module',
        },
        modules: {table: {disable: true}},
        onModuleClick: {table: {disable: true}},

    },
    args: {
        moduleState: 'in-progress',
        moduleReached: 1,
    },
};

export default meta;

const Template: StoryFn<ProgressMapProps> = (args) => {
    return (
        <div className={"h-[346px]"}>
            <ProgressMap {...args} onModuleClick={(id: string) => alert(`Module with id ${id} was clicked`)}/>
        </div>
    )

}
export const Default = Template.bind({});
Default.args = {
    modules: [
        { title: 'Hamlet' , id: '1'},
        { title: 'Sonnet 16', id: '2' },
        { title: 'Macbeth', id: '3'},
        { title: 'Romeo and Juliet', id: '4' },
        { title: 'History of William Shakespeare' , icon: 'star', id: '5'},
        { title: 'Dramatic Metaphors', id: '6' },
    ],
    moduleReached: 2,
    moduleState: 'in-progress',
};