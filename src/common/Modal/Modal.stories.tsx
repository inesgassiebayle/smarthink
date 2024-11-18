import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import courseImage from "../../assets/literature.webp";
import avatarImage from "../../assets/girl3.jpg";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
    title: "Design System/Atoms/Modal",
    component: Modal,
    argTypes: {
        isOpen: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Controls the visibility of the modal",
        },
        title: {
            control: { type: "text" },
            defaultValue: "William Shakespeare",
            description: "Title of the modal",
        },
        content: {
            control: { type: "text" },
            defaultValue: "William Shakespeare, often hailed as the greatest playwright in the English language and one of the most influential writers in world literature, was born in Stratford-upon-Avon, England, in 1564. His work has left an indelible mark on literature, theater, and the English language itself. Over his lifetime, Shakespeare wrote approximately 39 plays, 154 sonnets, and two narrative poems, encompassing a vast range of genres that include tragedy, comedy, and history.",
            description: "Content of the modal",
        },
        showCloseIcon: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Whether to show the close icon",
        },
        showCourseImage: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Whether to display the course image",
        },
        showTeacherTag: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Whether to show the teacher tag",
        },
        showPrimaryButton: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Whether to show the primary button",
        },
        showSecondaryButton: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "Whether to show the secondary button",
        },
        showFav: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "Whether to show the favorite icon",
        },
        showFooter: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Whether to show the footer",
        },
        imageSrc: {
            control: { type: "text" },
            defaultValue: courseImage,
            description: "Source for the course image",
        },
        actionIconVariant: {
            options: [
                "explore", "bookmark", "heart", "people", "switch_left", "switch_right", "tick", "clock",
                "correct_circle", "correct_square", "incorrect_circle", "incorrect_square", "star", "close",
                "add", "paper_clip", "download", "chat", "chat_multiple", "calendar", "search", "pencil",
                "folder", "bell", "prize", "export", "circle", "square", "profile", "pin", "video", "image",
                "pause", "play", "back", "menu", "home", "text", "mic", "smiley", "confetti", "unlocked",
                "empty", "switch",
            ],
            control: { type: "select" },
            description: "Icon variant to display",
        },
        teacherTag: {
            table: { disable: true },
            description: "Teacher's tag with name and avatar",
        },
        buttons: {table: { disable: true }},
        icon: { table: { disable: true } },
        imageAlt: { table: { disable: true } },
        onClose: {
            table: { disable: true },
            description: "Function to handle modal close",
        },
    },
};

export default meta;

const Template: StoryFn<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            {...args}
            isOpen={isOpen}
            onClose={handleClose}
        />
    );
};

export const ModalExample = Template.bind({});
ModalExample.args = {
    isOpen: true,
    title: "William Shakespeare",
    content: "William Shakespeare, often hailed as the greatest playwright in the English language and one of the most influential writers in world literature, was born in Stratford-upon-Avon, England, in 1564. His work has left an indelible mark on literature, theater, and the English language itself. Over his lifetime, Shakespeare wrote approximately 39 plays, 154 sonnets, and two narrative poems, encompassing a vast range of genres that include tragedy, comedy, and history.",
    showCloseIcon: true,
    showCourseImage: true,
    showTeacherTag: true,
    showPrimaryButton: true,
    showSecondaryButton: true,
    showFav: true,
    showFooter: true,
    imageSrc: courseImage,
    teacherTag: { name: "Jane Doe", avatarSrc: avatarImage },
    buttons: [
        {
            label: "Primary",
            onClick: () => alert("Primary button clicked"),
            variant: "filled",
        },
        {
            label: "Secondary",
            onClick: () => alert("Secondary button clicked"),
            variant: "outlined",
        },
    ],
};
