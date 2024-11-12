import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ModuleDetailsPopUp from "./ModuleDetailsPopUp";
import exampleImage1 from "../../assets/girl2.jpeg";
import financeImg from "../../assets/finance.png";
import exampleImage2 from "../../assets/boy3.jpg";
import economics from "../../assets/economics.png";
import exampleImage3 from "../../assets/woman1.jpg";
import finance3 from "../../assets/finance3.png";
import exampleImage11 from "../../assets/biology.png";
import exampleImage31 from "../../assets/finance.png";
import example41 from "../../assets/chemestry.jpeg";
import example51 from "../../assets/literature.webp";
import teacher from '../../assets/avatar-boy1.jpg';

export default {
    title: "Design System/Atoms/ModuleDetailsPopUp",
    component: ModuleDetailsPopUp,
} as Meta<typeof ModuleDetailsPopUp>;

const modulesData = [
    { id: "1", title: "Introduction to Financial Analysis", avatarSource: exampleImage1, courseSource: financeImg, progress: 80 },
    { id: "2", title: "Shares, Stocks and Equities", avatarSource: exampleImage2, courseSource: economics, progress: 45 },
    { id: "3", title: "Capitalization & Regulations", avatarSource: exampleImage3, courseSource: finance3, progress: 70 },
    { id: "4", title: "Biology I", avatarSource: exampleImage1, courseSource: exampleImage11, progress: 80 },
    { id: "5", title: "Finance", avatarSource: exampleImage3, courseSource: exampleImage31, progress: 70 },
    { id: "6", title: "Chemestry", avatarSource: exampleImage1, courseSource: example41, progress: 20 },
    { id: "7", title: "Literature", avatarSource: exampleImage3, courseSource: example51, progress: 100 },
];


const Template: StoryFn<typeof ModuleDetailsPopUp> = (args) => {
    return (
        <ModuleDetailsPopUp {...args} />
    );
};

export const ModuleDetailsPopUpStory = Template.bind({});
ModuleDetailsPopUpStory.args = {
    modules: modulesData,
    title: "Finance 101",
    rating: "4.5",
    teacher: "John Doe",
    teacherImg: teacher,
    information: "This introductory course covers the fundamental principles of finance, including financial analysis, risk management, investment strategies, and market regulations. Designed for beginners, it provides practical insights and essential skills for understanding the finance world, enabling learners to build a strong foundation in financial decision-making."
};
