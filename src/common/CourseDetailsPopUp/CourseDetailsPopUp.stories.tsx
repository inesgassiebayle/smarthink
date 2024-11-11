import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CourseDetailsPopUp from "./CourseDetailsPopUp";
import boy3Img from "../../assets/boy3.jpg";
import financeImg from "../../assets/finance.png";
import economics from "../../assets/economics.png";
import finance3 from "../../assets/finance3.png";
import Icon from "../Icon/Icon";
import CourseCard from "../CourseCard/CourseCard";
import PersonTag from "../TeacherTag/PersonTag";

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
