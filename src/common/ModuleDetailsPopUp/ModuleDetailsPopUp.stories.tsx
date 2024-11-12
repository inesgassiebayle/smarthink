import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ModuleDetailsPopUp from "./ModuleDetailsPopUp";

export default {
    title: "Design System/Atoms/ModuleDetailsPopUp",
    component: ModuleDetailsPopUp,
} as Meta<typeof ModuleDetailsPopUp>;

const Template: StoryFn<typeof ModuleDetailsPopUp> = (args) => {
    return (
        <ModuleDetailsPopUp {...args} />
    );
};

export const ModuleDetailsPopUpStory = Template.bind({});
ModuleDetailsPopUpStory.args = {};
