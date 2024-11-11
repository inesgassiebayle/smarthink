import SearchBar from "./SearchBar";
import { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof SearchBar> = {
    title: "Design System/Atoms/SearchBar",
    component: SearchBar,
    argTypes: {
        state: {
            options: ["default", "active", "disabled"],
            control: { type: "select" },
            description: "State of the search bar",
            defaultValue: "default",
        },
        placeholder: {
            control: { type: "text" },
            defaultValue: "Search...",
            description: "Placeholder text for the search bar",
        },
        disabled: {
            control: { type: "boolean" },
            description: "Disables the search bar",
            defaultValue: false,
        },
        value: {
            control: { type: "text" },
            description: "Value inside the search bar",
            defaultValue: "",
        }
    },
};

export default meta;


const Template: StoryFn<typeof SearchBar> = (args) => {

    return (
        <div>
            <SearchBar {...args}  />
        </div>

    );
};

export const SearchBarStory = Template.bind({});
SearchBarStory.args = {
    state: "default",
    placeholder: "Search a class name",
    value: "",
    disabled: false,
};