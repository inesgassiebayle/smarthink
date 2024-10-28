import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import TeacherTag from "../TeacherTag/TeacherTag";
import SubjectTag from "../SubjectTag/SubjectTag";

export interface CourseCardProps extends VariantProps<typeof courseCardVariant> {
    variant: "horizontal" | "vertical";
    teacher: string;
    title: string;
    subject: string;
    avatarSource: string;
    courseSource: string;
}

const courseCardVariant = cva(
    [
        "flex items-center gap-2 rounded-lg border bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]",
        "border-primary-100",
    ],
    {
        variants: {
            variant: {
                horizontal: ["w-[344px] h-[80px] flex-shrink-0"],
                vertical: ["w-[142px] h-[142px] flex-col pb-2"],
            },
        },
    }
);

export default function CourseCard({
                                       variant,
                                       teacher,
                                       title,
                                       subject,
                                       avatarSource,
                                       courseSource,
                                       ...props
                                   }: CourseCardProps) {
    return (
        <div className={courseCardVariant({ variant })} {...props}>
            {variant === "horizontal" ? (
                <>
                    <div className="flex p-[var(--Space-200,8px)] px-[var(--Icon-Small,24px)] items-center gap-[var(--Space-400,16px)] flex-[1_0_0%] self-stretch">
                        <div className="flex flex-col items-start gap-2 flex-[1_0_0%]">
                            <div className="flex flex-col items-start gap-1 self-stretch">
                                <SubjectTag subject={subject} />
                                <span className="text-text-black font-inter text-base font-regular leading-[120%] self-stretch">
                  {title}
                </span>
                            </div>
                            <TeacherTag name={teacher} avatarSrc={avatarSource} size={"medium"} />
                        </div>
                    </div>
                    <img
                        src={courseSource}
                        alt="Course Image"
                        className="w-[80px] h-[80px] object-cover rounded-r-lg"
                    />
                </>
            ) : (
                <>
                    <div className="relative w-[142px] h-[60px] flex-shrink-0">
                        <img
                            src={courseSource}
                            alt="Course Image"
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute top-1 left-2">
                            <SubjectTag subject={subject} />
                        </div>
                    </div>
                    <div className="flex w-[128px] h-[78px] p-[var(--Space-200,8px)] flex-col justify-between items-center flex-shrink-0">
                        <span className="overflow-hidden text-text-black text-ellipsis font-inter text-base font-regular leading-[120%] self-stretch line-clamp-2">
                            {title}
                        </span>
                        <TeacherTag name={teacher} avatarSrc={avatarSource} size={"small"} />
                    </div>
                    {/* TODO ADD THE PADDING BOTTOM 8PX */}
                </>
            )}
        </div>
    );
}
