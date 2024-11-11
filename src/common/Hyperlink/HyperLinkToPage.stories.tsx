import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HyperLinkToPage from "./HyperLinkToPage";

const meta: Meta<typeof HyperLinkToPage> = {
    title: "Design System/Atoms/HyperlinkToPage",
    component: HyperLinkToPage,
    argTypes: {
        subject: {
            control: {
                type: "text",
            },
        },
        link: {
            control: {
                type: "text",
            },
        },
    },
};

export default meta;

const Template: StoryFn<typeof HyperLinkToPage> = (args) => <HyperLinkToPage {...args}/>;

export const Default = Template.bind({});
Default.args = {
    subject: "Subject",
    link: "https://www.google.com",
};
