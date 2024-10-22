import { Meta, StoryFn } from "@storybook/react";
import TeacherTag from './TeacherTag';
import avatarImage from '../../stories/assets/avatar.png';

export default {
    title: "Design System/Atoms/TeacherTag",
    component: TeacherTag,
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
    },
} as Meta<typeof TeacherTag>;

const Template: StoryFn<typeof TeacherTag> = (args) => <TeacherTag {...args} />;

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
