import React from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import AnswerIcon from "../AnswerIcons/AnswerIcon";

export interface QuestionAnswerProps extends VariantProps<typeof answerVariant> {
    text: string;
    iconShape?: "circle" | "square";
    filled: boolean;
}


const answerVariant = cva(
    [
        "w-full",
        "p-4",
        "rounded-xl",
        "flex",
        "items-center",
        "rounded-[28px]",
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

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({text, state, iconShape = "circle", filled = true}) => {
    const getIconProps = (): {
        shape: "circle" | "square";
        color: string;
        filled: boolean;
        state: "correct" | "incorrect" | "default"
        clickable?: boolean;
    } => {
        let colorClass = "";
        switch (state) {
            case 'success':
                colorClass = "text-state-succes";
                return {state: 'correct', shape: iconShape, filled: filled, color: colorClass};
            case 'error':
                colorClass = "text-state-error";
                return {state: 'incorrect', shape: iconShape, filled: true, color: colorClass};
            case 'disabled':
                colorClass = "text-primary-100";
                return {state: 'default', shape: iconShape, filled: filled, color: colorClass, clickable: false};
            default:
                colorClass = "text-primary-500";
                return {state: 'default', shape: iconShape, filled: filled, color: colorClass};
        }
    };

    return (
        <div
            className={`w-full h-full px-6 py-2 rounded-[28px] overflow-hidden border ${answerVariant({state})} justify-start items-center gap-2 inline-flex`}>
            <div className="flex-1 justify-start flex items-center gap-2">
                <div className="flex-1 text-black text-base font-normal font-inter leading-5 break-words overflow-hidden">
                    {text}
                </div>
            </div>
            <div className="w-6 h-6 p-0.5 flex justify-center items-center self-center ">
                <AnswerIcon {...getIconProps()} />
            </div>
        </div>
    );

};
export default QuestionAnswer;
