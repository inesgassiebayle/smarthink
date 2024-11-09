import { Meta, StoryFn } from "@storybook/react";
import Modal, {ModalProps} from "./Modal";
import courseImage from "../../assets/literature.webp";
import avatarImage from "../../assets/girl3.jpg";
import {useState} from "react";

const meta: Meta<typeof Modal> = {
    title: "Design System/Atoms/Modal",
    component: Modal,
    argTypes: {
        isOpen: { control: { type: "boolean" }, defaultValue: true },
        title: { control: { type: "text" }, defaultValue: "William Shakespeare" },
        content: { control: { type: "text" }, defaultValue: "William Shakespeare, often hailed as the greatest playwright in the English language and one of the most influential writers in world literature, was born in Stratford-upon-Avon, England, in 1564. His work has left an indelible mark on literature, theater, and the English language itself. Over his lifetime, Shakespeare wrote approximately 39 plays, 154 sonnets, and two narrative poems, encompassing a vast range of genres that include tragedy, comedy, and history. His ability to capture the complexity of human emotions and the nuances of individual psychology set him apart from his contemporaries and continue to resonate with readers and audiences across the globe." },
        showCloseIcon: { control: { type: "boolean" }, defaultValue: true },
        showCourseImage: { control: { type: "boolean" }, defaultValue: true },
        showTeacherTag: { control: { type: "boolean" }, defaultValue: true },
        showPrimaryButton: { control: { type: "boolean" }, defaultValue: true },
        showSecondaryButton: { control: { type: "boolean" }, defaultValue: false },
        showFav: { control: { type: "boolean" }, defaultValue: false },
        showFooter: { control: { type: "boolean" }, defaultValue: true },
        imageSrc: { control: { type: "text" }, defaultValue: courseImage },
        teacherTag: { control: { type: "object" }, defaultValue: { name: "Jane Doe", avatarSrc: avatarImage } },
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

const Template: StoryFn<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
        <Modal
            {...args}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        />
    );
};


export const ModalExample = Template.bind({});
ModalExample.args = {
    isOpen: true,
    title: "William Shakespeare",
    content: "William Shakespeare, often hailed as the greatest playwright in the English language and one of the most influential writers in world literature, was born in Stratford-upon-Avon, England, in 1564. His work has left an indelible mark on literature, theater, and the English language itself. Over his lifetime, Shakespeare wrote approximately 39 plays, 154 sonnets, and two narrative poems, encompassing a vast range of genres that include tragedy, comedy, and history. His ability to capture the complexity of human emotions and the nuances of individual psychology set him apart from his contemporaries and continue to resonate with readers and audiences across the globe.",
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
