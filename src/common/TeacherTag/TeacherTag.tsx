import { FunctionComponent } from "react";

interface TeacherTagProps {
    name: string;
    avatarSrc: string;
    size?: "small" | "medium" | "large";
}

const TeacherTag: FunctionComponent<TeacherTagProps> = ({
                                                            name,
                                                            avatarSrc,
                                                            size = "medium",
                                                        }) => {
    const sizes = {
        small: {
            avatarSize: "w-icon-small h-icon-small",
            fontSize: "text-xs",
            lineHeight: "leading-[120%]",
        },
        medium: {
            avatarSize: "w-icon-medium h-icon-medium",
            fontSize: "text-xs",
            lineHeight: "leading-[120%]",
        },
        large: {
            avatarSize: "w-icon-large h-icon-large",
            fontSize: "text-sm",
            lineHeight: "leading-[120%]",
        },
    };

    return (
        <div className="flex items-center gap-[var(--Space-200,8px)] w-full">
            <img
                src={avatarSrc}
                alt="Teacher Avatar"
                className={`rounded-full ${sizes[size].avatarSize}`}
            />
            <span
                className={`flex-1 truncate overflow-hidden whitespace-nowrap font-inter ${sizes[size].fontSize} ${sizes[size].lineHeight} text-text-black`}
            >
                {name}
            </span>
        </div>
    );
};

export default TeacherTag;
