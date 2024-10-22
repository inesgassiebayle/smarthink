import InputField from "./InputField";
import { Meta, StoryFn } from "@storybook/react";
import AddIcon from "@mui/icons-material/Add";

const meta: Meta<typeof InputField> = {
    title: "Design System/Atoms/InputField",
    component: InputField,
    argTypes: {
        state: {
            options: ["default", "error", "disabled"],
            control: { type: "select" },
            description: "State of the input field",
            defaultValue: "default",
        },
        icon: {
            control: { type: "select" },
            options: ["None", "AddIcon"],
            mapping: {
                None: null,
                AddIcon: AddIcon,
            },
            description: "Optional icon to display on the right",
            defaultValue: "None",
        },
        placeholder: {
            control: { type: "text" },
            defaultValue: "Input name",
        },
        value: {
            control: { type: "text" },
            defaultValue: "",
        }
    },
};

export default meta;

const Template: StoryFn<typeof InputField> = (args) => <InputField {...args} />;

export const InputFieldStory = Template.bind({});
InputFieldStory.args = {
    state: "default",
    placeholder: "Input name",
    value: "",
    disabled: false,
};
