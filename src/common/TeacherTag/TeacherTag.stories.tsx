import { Meta, StoryFn } from "@storybook/react";
import PersonTag from './PersonTag';
import avatarImage from '../../assets/avatar-boy1.jpg';

export default {
    title: "Design System/Atoms/TeacherTag",
    component: PersonTag,
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
    },
} as Meta<typeof PersonTag>;

const Template: StoryFn<typeof PersonTag> = (args) => <PersonTag {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "Iván Rodríguez Vuillermoz",
    avatarSrc: avatarImage,
    size: "medium",
};

export const Large = Template.bind({});
Large.args = {
    name: "Iván Rodríguez Vuillermoz",
    avatarSrc: avatarImage,
    size: "large",
};

export const Small = Template.bind({});
Small.args = {
    name: "Iván Rodríguez Vuillermoz",
    avatarSrc: avatarImage,
    size: "small",
};
