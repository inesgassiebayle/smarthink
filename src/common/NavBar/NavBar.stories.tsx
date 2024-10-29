import { Meta, StoryFn } from "@storybook/react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Design System/Molecules/NavBar",
    component: NavBar,
    argTypes: {},
};

export default meta;

const Template: StoryFn<typeof NavBar> = (args) => <NavBar {...(args as {})} />;

export const DefaultNavBar = Template.bind({});
DefaultNavBar.args = {};
