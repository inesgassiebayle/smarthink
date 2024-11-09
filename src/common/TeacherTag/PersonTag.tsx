import { FunctionComponent } from "react";
import Avatar from "../Avatar/Avatar";

interface TeacherTagProps {
    name: string;
    avatarSrc: string;
    size: "small" | "medium" | "large";
}

const sizes: Record<TeacherTagProps["size"], { avatarSize: "small" | "medium" | "large" | "xxsmall" | "xsmall" | "xlarge" | "xxlarge"; fontSize: string; lineHeight: string }> = {
    small: {
        avatarSize: "xxsmall",
        fontSize: "text-xs",
        lineHeight: "leading-[120%]",
    },
    medium: {
        avatarSize: "xsmall",
        fontSize: "text-xs",
        lineHeight: "leading-[120%]",
    },
    large: {
        avatarSize: "small",
        fontSize: "text-sm",
        lineHeight: "leading-[120%]",
    },
};

const PersonTag: FunctionComponent<TeacherTagProps> = ({
                                                           name,
                                                           avatarSrc,
                                                           size = "medium",
                                                       }) => {
    return (
        <div className="flex items-center gap-[var(--Space-200,8px)] w-full">
            <Avatar
                imageSrc={avatarSrc}
                size={sizes[size].avatarSize}
            />
            <span
                className={`flex-1 truncate overflow-hidden whitespace-nowrap font-inter ${sizes[size].fontSize} ${sizes[size].lineHeight} text-text-black`}
            >
                {name}
            </span>
        </div>
    );
};

export default PersonTag;
