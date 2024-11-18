import { Meta, StoryFn } from "@storybook/react";
import Tabs from "./Tabs";

export default {
    title: "Design System/Atoms/Tabs",
    component: Tabs,
    argTypes: {
        tab1Label: {
            control: "text",
            defaultValue: "Tab 1",
            description: "Label for the first tab",
        },
        tab2Label: {
            control: "text",
            defaultValue: "Tab 2",
            description: "Label for the second tab",
        },
        onTabChange: { table: { disable: true } },
    },
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    tab1Label: "Tab 1",
    tab2Label: "Tab 2",
};
