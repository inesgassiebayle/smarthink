import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import MessageBubble, { MessageBubbleProps } from './MessageBubble';
import finance from '../../assets/finance.png';

export default {
    title: "Design System/Atoms/MessageBubble",
    component: MessageBubble,
    argTypes: {
        variant: {
            control: 'select',
            options: ['ingoing', 'outgoing'],
            description: 'Indica si el mensaje es entrante (ingoing) o saliente (outgoing)',
        },
        isLastMessage: {
            control: 'boolean',
            description: 'Indica si es el último mensaje, para mostrar la colita',
        },
        text: {
            control: 'text',
            defaultValue: 'Este es un mensaje de prueba',
            description: 'Texto del mensaje',
        },
        time: {
            control: 'text',
            defaultValue: '12:45 PM',
            description: 'Hora del mensaje',
        },
        link: {
            control: 'text',
            description: 'URL de enlace opcional que se muestra en el mensaje',
        },
        subject: {
            control: 'text',
            description: 'Texto del enlace opcional que se muestra en el mensaje',
        },
        imageSrc: {
            control: 'text',
            description: 'URL de una imagen opcional para mostrar junto al mensaje',
        },
    },
} as Meta<MessageBubbleProps>;

type Story = StoryObj<MessageBubbleProps>;

export const Default: Story = {
    args: {
        variant: 'ingoing',
        isLastMessage: true,
        text: '¡Hola profe! Tenía una duda sobre la entrega del proyecto final.',
        time: '12:45 PM',
        link: 'https://example.com',
        subject: 'Documento de referencia',
        imageSrc: finance
    },
};
