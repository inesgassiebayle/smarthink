import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import MessageBubble, { MessageBubbleProps } from './MessageBubble';

export default {
    title: "Design System/Atoms/MessageBubble",
    component: MessageBubble,
    argTypes: {
        variant: {
            control: 'select',
            options: ['ingoing', 'outgoing'],
            description: 'Indica si el mensaje es entrante (ingoing) o saliente (outgoing)'
        },
        isLastMessage: {
            control: 'boolean',
            description: 'Indica si es el último mensaje, para mostrar la colita'
        },
        text: {
            control: 'text',
            defaultValue: 'Este es un mensaje de prueba',
            description: 'Texto del mensaje'
        },
        time: {
            control: 'text',
            defaultValue: '12:45 PM',
            description: 'Hora del mensaje'
        },
    },
} as Meta<MessageBubbleProps>;

type Story = StoryObj<MessageBubbleProps>;

export const Default: Story = {
    args: {
        variant: 'ingoing',
        isLastMessage: true,
        text: '"¡Hola profe! Tenía una duda sobre la entrega del proyecto final. ¿Tiene que estar todo el código documentado o solo las partes principales?"',
        time: '12:45 PM',
    },
};
