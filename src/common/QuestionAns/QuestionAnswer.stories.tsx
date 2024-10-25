import { Meta, StoryFn } from '@storybook/react';
import QuestionAnswer from './QuestionAnswer';

const meta: Meta<typeof QuestionAnswer> = {
    title: 'Design System/Atoms/QuestionAnswer',
    component: QuestionAnswer,
    argTypes: {
        state: {
            options: ['default', 'success', 'error', 'disabled'],
            control: { type: 'select' },
            description: 'State of the answer box',
            defaultValue: 'default',
        },
        text: {
            control: { type: 'text' },
            description: 'Text inside the answer box',
            defaultValue: 'Answer 1',
        },
    },
};

export default meta;

const Template: StoryFn<typeof QuestionAnswer> = (args) => <QuestionAnswer {...args} />;

export const QuestionAnswerStory = Template.bind({});
QuestionAnswerStory.args = {
    text: 'Answer 1',
    state: 'default',
};
