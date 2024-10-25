import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface QuestionAnswerProps extends VariantProps<typeof answerVariant> {
    text: string;
}
const answerVariant = cva(
    [
        "w-full",
        "p-4",
        "rounded-xl",
        "flex",
        "items-center",
        "gap-2",
        "border",
        "max-w-md",
    ],
    {
        variants: {
            state: {
                default: "border-primary-500",
                success: "border-state-succes",
                error: "border-state-error",
                disabled: "border-primary-100",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ text, state }) => {
    return (
        <div className={`px-6 py-2 ${answerVariant({state})}`}>
            <div className="flex-1 text-black text-base font-regular">
                {text}
            </div>
            <div className="w-6 h-6 p-0.5 flex justify-center items-center">
                <div
                    className={`w-5 h-full ${
                        state === "success" ? "bg-state-succes" :
                            state === "error" ? "bg-state-error" :
                                "bg-primary-200"
                    }`}
                />
            </div>
        </div>
    );
}

export default QuestionAnswer;
