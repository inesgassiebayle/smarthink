import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface SubjectTagProps extends VariantProps<typeof subjectVariant> {
    subject: string;
}

const subjectVariant = cva(
    "inline-flex items-center px-[4px] py-[2px] rounded-full bg-primary-100",
);

const SubjectTag = ({ subject }: SubjectTagProps) => {
    return (
        <div className={subjectVariant()}>
            <span className="text-grayscale-black font-inter text-xs">
                {subject}
            </span>
        </div>
    );
}

export default SubjectTag;
