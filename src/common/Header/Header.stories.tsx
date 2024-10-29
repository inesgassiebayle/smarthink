import { FunctionComponent } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Header from "./Header";

export default {
    title: "Design System/Atoms/Header",
    component: Header,
    argTypes: {
        title: {
            control: 'text',
            description: 'The title of the header',
            defaultValue: 'Header Title',
        },
        icon1: {
            control: {
                type: 'radio',
                options: ['empty', 'menu', 'explore'],
            },
            description: 'First icon variant',
            defaultValue: 'menu',
        },
        icon2: {
            control: {
                type: 'radio',
                options: ['empty', 'menu', 'explore'],
            },
            description: 'Second icon variant',
            defaultValue: 'explore',
        },
        icon3: {
            control: {
                type: 'radio',
                options: ['empty', 'menu', 'explore'],
            },
            description: 'Third icon variant',
            defaultValue: 'empty',
        },
        icon4: {
            control: {
                type: 'radio',
                options: ['empty', 'menu', 'explore'],
            },
            description: 'Fourth icon variant',
            defaultValue: 'empty',
        },
        onIconClick1: {
            action: 'icon1 clicked',
        },
        onIconClick2: {
            action: 'icon2 clicked',
        },
        onIconClick3: {
            action: 'icon3 clicked',
        },
        onIconClick4: {
            action: 'icon4 clicked',
        },
    },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Header Title',
    icon1: 'menu',
    icon2: 'explore',
    icon3: 'empty',
    icon4: 'empty',
};
