import React from "react";
import Hint from "./Hint";
import PersonTag from "../TeacherTag/PersonTag";

export interface QuestionHintProps {
    hintText: string;
    questionText: string;
    personName: string;
    avatarSrc: string;
}

const QuestionHint: React.FC<QuestionHintProps> = ({ hintText, questionText, personName, avatarSrc }) => {
    return (
        <div className="flex flex-col gap-[8px] w-[344px] p-4 rounded-[24px] border border-primary-100 bg-white shadow-lg">
            <div className="w-fit">
                <Hint>{hintText}</Hint>
            </div>

            <p className="text-base font-inter font-normal text-black leading-[140%]">
                {questionText}
            </p>

            <PersonTag name={personName} avatarSrc={avatarSrc} size="large" />
        </div>
    );
};

export default QuestionHint;
