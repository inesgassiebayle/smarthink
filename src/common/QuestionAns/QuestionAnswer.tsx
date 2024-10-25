import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import AnswerIcon from "../AnswerIcons/AnswerIcon";

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
    const getIconProps = (): { state: "correct" | "incorrect" | "default"; shape: "circle" | "square"; filled: boolean, color: string } => {
        let color;
        switch (state) {
            case 'success':
                color = '#00FF00'; // Color verde para correcto
                return { state: 'correct', shape: 'circle', filled: true, color };
            case 'error':
                color = '#FF0000'; // Color rojo para error
                return { state: 'incorrect', shape: 'circle', filled: true, color };
            default:
                color = '#888888'; // Color gris para el estado por defecto
                return { state: 'default', shape: 'circle', filled: false, color };
        }
    };

    return (
        <div className={`px-6 py-2 ${answerVariant({ state })}`}>
            <div className="flex-1 text-black text-base font-regular">
                {text}
            </div>
            <div className="w-6 h-6 p-0.5 flex justify-center items-center">
                <AnswerIcon {...getIconProps()} />
            </div>
        </div>
    );
};


export default QuestionAnswer;
