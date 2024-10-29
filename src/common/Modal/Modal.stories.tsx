import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";
import AddIcon from '@mui/icons-material/Add';
import courseImage from '../../stories/assets/course-image.png';
import avatarImage from '../../stories/assets/avatar.png';

const meta: Meta<typeof Modal> = {
    title: "Design System/Molecules/Modal",
    component: Modal,
    argTypes: {
        isOpen: { control: { type: "boolean" }, defaultValue: true },
        title: { control: { type: "text" }, defaultValue: "Modal Title" },
        content: { control: { type: "text" }, defaultValue: "This is the content of the modal." },
        showCloseIcon: { control: { type: "boolean" }, defaultValue: true },
        imageSrc: { control: { type: "text" }, defaultValue: courseImage },
        teacherTag: { control: { type: "object" }, defaultValue: { name: "Iván Rodríguez Vuillermoz", avatarSrc: avatarImage } },
        buttons: {
            control: { type: "object" },
            defaultValue: [
                { label: 'Cancel', onClick: () => alert('Cancel'), variant: 'outlined' },
                { label: 'Confirm', onClick: () => alert('Confirm'), variant: 'filled' },
            ],
        },
    },
};

export default meta;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Modal_Two_Buttons = Template.bind({});
Modal_Two_Buttons.args = {
    isOpen: true,
    title: "Title",
    content: "Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. ",
    showCloseIcon: false,
    imageSrc: undefined,
    teacherTag: undefined,
    buttons: [
        { label: 'Button', onClick: () => alert('Button'), variant: 'filled' },
        { label: 'Button', onClick: () => alert('Button'), variant: 'outlined' },
    ],
};

export const Modal_Heart_Close = Template.bind({});
Modal_Heart_Close.args = {
    isOpen: true,
    title: "Title",
    content: "Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. ",
    showCloseIcon: true,
    imageSrc: undefined,
    teacherTag: undefined,
    buttons: [
        { label: 'Button', onClick: () => alert('Button'), variant: 'filled' },
    ],
};

export const Modal_TeacherTag_Button = Template.bind({});
Modal_TeacherTag_Button.args = {
    isOpen: true,
    title: "Title",
    content: "Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. ",
    showCloseIcon: true,
    imageSrc: courseImage,
    teacherTag: { name: "Iván Rodríguez Vuillermoz", avatarSrc: avatarImage },
    buttons: [
        { label: 'Button', onClick: () => alert('Button'), variant: 'filled' },
    ],
};

export const Modal_OnlyClose = Template.bind({});
Modal_OnlyClose.args = {
    isOpen: true,
    title: "Title",
    content: "Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. ",
    showCloseIcon: true,
    imageSrc: undefined,
    teacherTag: undefined,
    buttons: [],
};

export const Modal_Image_Button = Template.bind({});
Modal_Image_Button.args = {
    isOpen: true,
    title: "Title",
    content: "Content of the modal goes here...",
    showCloseIcon: false,
    imageSrc: courseImage,
    teacherTag: undefined,
    buttons: [
        { label: 'Button', onClick: () => alert('Button'), variant: 'filled' },
        { label: 'Button', onClick: () => alert('Button'), variant: 'outlined' },
    ],
};

export const Modal_Teacher_Image = Template.bind({});
Modal_Teacher_Image.args = {
    isOpen: true,
    title: "Title",
    content: "Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. Content of the modal goes here taking into consideration the length of the text. ",
    showCloseIcon: true,
    imageSrc: courseImage,
    teacherTag: { name: "Iván Rodríguez Vuillermoz", avatarSrc: avatarImage },
    buttons: [
    ],
};
