import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressMap, { ProgressMapProps } from './ProgressMap';

const meta: Meta<typeof ProgressMap> = {
    title: 'Design System/Molecules/ProgressMap',
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
            <ProgressMap {...args} />
        </div>
    )

}
export const Default = Template.bind({});
Default.args = {
    modules: [
        { title: 'Hamlet' },
        { title: 'Sonnet 16' },
        { title: 'Macbeth'},
        { title: 'Romeo and Juliet' },
        { title: 'History of William Shakespeare' , icon: 'star'},
        { title: 'Dramatic Metaphors' },
    ],
    moduleReached: 2,
    moduleState: 'in-progress',
};