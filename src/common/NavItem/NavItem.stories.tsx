import { Meta, StoryFn } from "@storybook/react";
import NavItem from "./NavItem";

const meta: Meta<typeof NavItem> = {
    title: "Design System/Atoms/NavItem",
    component: NavItem,
    argTypes: {
        variant: {
            options: ["bookmark", "heart", "home"],
            control: {type: "select"},
            description: 'Nav Item Variant',
        },
        active: {
            control: {type: "boolean"},
            description: 'Nav Item Active',
        },
        onClick: {table: {disable: true}},
    }
};

export default meta;

const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />;

export const NavItemStory = Template.bind({});
NavItemStory.args = {
    variant: 'bookmark',
    active: false,
};
