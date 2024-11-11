import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CourseDetailsPopUp from "./CourseDetailsPopUp";

export default {
    title: "Design System/Atoms/CourseDetailsPopUp",
    component: CourseDetailsPopUp,
    argTypes: {
        activeTab: {
            control: "radio",
            options: ["Modules", "About"],
            description: "Controls the active tab displayed in the popup",
        },
    },
} as Meta<typeof CourseDetailsPopUp>;

const Template: StoryFn<typeof CourseDetailsPopUp> = (args) => {
    return (
        <CourseDetailsPopUp {...args} />
    );
};

export const CourseDetailsPopUpStory = Template.bind({});
CourseDetailsPopUpStory.args = {
    activeTab: "Modules",  // or "About" depending on the tab you want to show by default
};
