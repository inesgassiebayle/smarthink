import { Meta, StoryFn } from "@storybook/react";
import PersonTag from './PersonTag';
import avatarImage from '../../assets/girl3.jpg';

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
    name: "Jennifer Doe",
    avatarSrc: avatarImage,
    size: "medium",
};
