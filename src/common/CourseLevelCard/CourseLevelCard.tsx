import React from "react";
import SubjectTag from "../SubjectTag/SubjectTag";
import NumberIcon from "../NumberIcon/NumberIcon";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

export interface CourseLevelCardProps {
    level: number;
    progress: number;
    points: number;
    courseSource: string;
    title: string;
    variant: "standard" | "leveled";
}

export default function CourseCard({
                                       level,
                                       progress,
                                       courseSource,
                                       points,
                                       title,
                                       variant,
                                       ...props
                                   }: CourseLevelCardProps) {
    return (
        <div className="flex w-full h-[80px] items-center gap-[8px] flex-shrink-0 rounded-[16px] border border-primary-100 bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
            <img
                src={courseSource}
                alt="Course Image"
                className="w-[80px] h-[80px] object-cover rounded-l-lg"
            />
            <div className="flex px-[24px] py-[8px] items-center gap-[16px] flex-1 justify-between">
                {variant === "leveled" ? (
                    <>
                        <div className="flex flex-col justify-center gap-[8px]">
                            <div className="flex items-center gap-[8px]">
                                <NumberIcon number={level} size="medium" />
                                <span className="text-text-black font-inter text-sm font-regular leading-[120%]">Level {level}</span>
                            </div>
                            <div className="inline-flex">
                                <SubjectTag subject={`Points: ${points}`} />
                            </div>
                        </div>
                        <CircularProgressBar progress={progress} size={40} />
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-start gap-[8px] flex-1">
                            <span className="text-[16px] leading-[120%] font-regular text-text-black">{title}</span>
                            <div className="inline-flex">
                                <SubjectTag subject={`Points: ${points}`} />
                            </div>
                        </div>
                        <CircularProgressBar progress={progress} size={40} />
                    </>
                )}
            </div>
        </div>
    );
}
