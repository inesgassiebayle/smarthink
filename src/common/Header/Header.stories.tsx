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
                options: ['empty', 'menu', 'explore', 'information', 'config', 'back', 'people'],
            },
            description: 'Fourth icon variant',
            defaultValue: 'empty',
        },
        onIconClick1: { table: { disable: true } },
        onIconClick2: { table: { disable: true } },
        onIconClick3: { table: { disable: true } },
        onIconClick4: { table: { disable: true } },
    },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) =>{
    return (
        <div className="flex flex-col items-center gap-[var(--Space-400,16px)]">
            <Header {...args} />
        </div>
    )
}

export const Default = Template.bind({});
Default.args = {
    title: 'Header Title',
    icon1: 'menu',
    icon2: 'explore',
    icon3: 'empty',
    icon4: 'empty',
};
