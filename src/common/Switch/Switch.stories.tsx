import { Meta, StoryFn } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";

export default {
    title: "Design System/Atoms/Switch",
    component: Switch,
    argTypes: {
        initialActive: {table: {disable: true}},
        onToggle: {table: {disable: true}},
    }
} as Meta<typeof Switch>;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
};
