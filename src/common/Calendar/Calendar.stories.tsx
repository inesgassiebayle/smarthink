import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CalendarComponent, { CalendarComponentProps } from "./Calendar";

export default {
    title: "Design System/Atoms/CalendarComponent",
    component: CalendarComponent,
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
        docs: {
            description: {
                component: "A customizable calendar component.",
            },
        },
    },
    argTypes: {
        initialDate: {
            control: { type: "date" },
            description: "The initial selected date on the calendar.",
            defaultValue: new Date(2024, 10, 5),
        },
    },
} as Meta<typeof CalendarComponent>;

const Template: StoryFn<CalendarComponentProps> = (args) => (
    <CalendarComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
    initialDate: new Date(2024, 10, 5),
};
