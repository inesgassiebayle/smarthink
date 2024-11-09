import { Meta, StoryFn } from "@storybook/react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Design System/Atoms/NavBar",
    component: NavBar,
    argTypes: {},
};

export default meta;

const Template: StoryFn<typeof NavBar> = (args) => {
    return (
        <div className="flex flex-col items-center gap-[var(--Space-400,16px)]">
            <NavBar {...(args as {})} />
        </div>
)};

export const DefaultNavBar = Template.bind({});
DefaultNavBar.args = {};
