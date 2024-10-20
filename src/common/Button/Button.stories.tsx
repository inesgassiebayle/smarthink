import Button from "./Button";
import { Meta, StoryFn } from "@storybook/react";
import AddIcon from '@mui/icons-material/Add';

const meta: Meta<typeof Button> = {
    title: "Design System/Atoms/Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["filled", "outlined"],
            control: { type: "select" },
            description: 'Button style variant (filled or outlined)',
            defaultValue: 'filled'
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "select" },
            description: 'Button size (small, medium, large)',
            defaultValue: 'medium'
        },
        disabled: {
            control: { type: "boolean" },
            description: 'Disables the button',
            defaultValue: false
        },
        icon: {
            control: { type: "select" },
            options: ['None', 'AddIcon'],
            mapping: {
                None: null,
                AddIcon: AddIcon,
            },
            description: 'Icon to display on the button',
            defaultValue: 'None',
        }
    }
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
    variant: 'filled',
    size: 'medium',
    children: 'Button',
    disabled: false,
};
