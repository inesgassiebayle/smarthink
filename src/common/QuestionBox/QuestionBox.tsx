import React from "react";


interface QuestionBoxProps {
    title: string;
    body: string;
    variant: "default" | "pressed" | "answered";
}

const QuestionBox: React.FC<QuestionBoxProps> = ({title, body, variant }) => {
    let borderClass = "border-primary-100";
    let bgClass = "bg-white";

    if (variant === "pressed") {
        bgClass = "bg-primary-100";
    } else if (variant === "answered") {
        borderClass = "border-primary-900";
    }

    return (
        <div
            className={`flex flex-col gap-4 p-4 w-full items-start rounded-[24px] border ${borderClass} ${bgClass} shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]`}
        ><h3 className="text-center font-inter text-base font-bold leading-6">
            {title}
        </h3>
            <p className="font-inter text-base font-normal leading-6">
                {body}
            </p>
        </div>
    );
};

export default QuestionBox;

