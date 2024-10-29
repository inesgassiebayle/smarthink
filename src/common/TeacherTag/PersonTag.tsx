import { FunctionComponent } from "react";
import Avatar from "../Avatar/Avatar";

interface TeacherTagProps {
    name: string;
    avatarSrc: string;
    size?: "small" | "medium" | "large";
}

const PersonTag: FunctionComponent<TeacherTagProps> = ({
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
            <Avatar imageSrc={avatarSrc} size={size} />
            <text className={`flex-1 truncate overflow-hidden whitespace-nowrap font-inter ${sizes[size].fontSize} ${sizes[size].lineHeight} text-text-black`}>
                {name}
            </text>
        </div>
    );
};

export default PersonTag;
