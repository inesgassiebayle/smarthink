import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MessageBubble, { MessageBubbleProps } from './MessageBubble';

export default {
    title: "Design System/Atoms/MessageBubble",
    component: MessageBubble,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['ingoing', 'outgoing', 'MessageCardIngoing', 'MessageCardOutgoing'],
            },
            description: 'The variant of the MessageBubble component',
        },
    },
} as Meta;

const Template: StoryFn<MessageBubbleProps> = (args) => <MessageBubble {...args} />;

export const Ingoing = Template.bind({});
Ingoing.args = {
    variant: 'ingoing',
};

export const Outgoing = Template.bind({});
Outgoing.args = {
    variant: 'outgoing',
};

export const MessageCardIngoing = Template.bind({});
MessageCardIngoing.args = {
    variant: 'MessageCardIngoing',
};

export const MessageCardOutgoing = Template.bind({});
MessageCardOutgoing.args = {
    variant: 'MessageCardOutgoing',
};
