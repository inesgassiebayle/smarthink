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
        showCourseImage: { control: { type: "boolean" }, defaultValue: true },
        showTeacherTag: { control: { type: "boolean" }, defaultValue: true },
        showPrimaryButton: { control: { type: "boolean" }, defaultValue: true },
        showSecondaryButton: { control: { type: "boolean" }, defaultValue: false },
        showFav: { control: { type: "boolean" }, defaultValue: false },
        showFooter: { control: { type: "boolean" }, defaultValue: true },
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

export const ModalExample = Template.bind({});
ModalExample.args = {
    isOpen: true,
    title: "Title",
    content: "Content of the modal goes here taking into consideration the length of the text...",
    showCloseIcon: true,
    showCourseImage: true,
    showTeacherTag: true,
    showPrimaryButton: true,
    showSecondaryButton: true,
    showFav: true,
    showFooter: true,
    imageSrc: courseImage,
    teacherTag: { name: "Iván Rodríguez Vuillermoz", avatarSrc: avatarImage },
    buttons: [
        {
            label: 'Button',
            onClick: () => alert('you clicked the button'),
            variant: 'filled',
        },
        {
            label: 'Button',
            onClick: () => alert('you clicked the button'),
            variant: 'outlined',
        },
    ],
};
