import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ModuleCardCarousel from "./ModuleCardCarousel";
import { ModuleCardProps } from "../ModuleCard/ModuleCard";
import exampleImage1 from "../../assets/girl2.jpeg";
import exampleImage2 from "../../assets/boy3.jpg";
import exampleImage3 from "../../assets/woman1.jpg";
import exampleImage11 from "../../assets/biology.png";
import exampleImage21 from "../../assets/economics.png";
import exampleImage31 from "../../assets/finance.png";
import example41 from  "../../assets/chemestry.jpeg"
import example51 from "../../assets/literature.webp"

export default {
    title: "Design System/Atoms/ModuleCardCarousel",
    component: ModuleCardCarousel,
} as Meta<typeof ModuleCardCarousel>;

const modulesData: Omit<ModuleCardProps, 'variant'>[] = [
    { id: "1", title: "Biology I", avatarSource: exampleImage1, courseSource: exampleImage11, progress: 80 },
    { id: "2", title: "Macro Economics", avatarSource: exampleImage2, courseSource: exampleImage21, progress: 45 },
    { id: "3", title: "Finance", avatarSource: exampleImage3, courseSource: exampleImage31, progress: 70 },
    { id: "4", title: "Chemestry", avatarSource: exampleImage1, courseSource: example41, progress: 20 },
    { id: "5", title: "Literature", avatarSource: exampleImage3, courseSource: example51, progress: 100 },

];

const Template: StoryFn<typeof ModuleCardCarousel> = (args) => (
    <ModuleCardCarousel {...args} onModuleClick={(id) => alert(`Module with id ${id} clicked`)} />
);

export const ModuleCarouselStory = Template.bind({});
ModuleCarouselStory.args = {
    modules: modulesData,
};
