import { Meta, StoryFn } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";

export default {
    title: "Design System/Atoms/Switch",
    component: Switch,
    argTypes: {
        onToggle: {
            action: "toggled",
        }
    }
} as Meta<typeof Switch>;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
};
