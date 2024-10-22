import { Meta, StoryFn } from "@storybook/react";
import NavItem from "./NavItem";

const meta: Meta<typeof NavItem> = {
    title: "Design System/Atoms/NavItem",
    component: NavItem,
    argTypes: {
        variant: {
            options: ["bookmark", "heart", "explore"],
            control: {type: "select"},
            description: 'Nav Item Variant',
        },
        active: {
            control: {type: "boolean"},
            description: 'Nav Item Active',
        }
    }
};

export default meta;

const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />;

export const NavItemStory = Template.bind({});
NavItemStory.args = {
    variant: 'bookmark',
    active: false,
};
