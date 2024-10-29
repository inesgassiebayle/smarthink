import React, { FunctionComponent } from "react";
import ProgressMapIcon from "../ProgressMapIcon/ProgressMapIcon";
import Icon, { IconProps } from "../Icon/Icon";

export interface ProgressMapModuleProps {
    title: string;
    variant: "default" | "in-progress" | "completed";
    state: "end" | "middle";
    icon?: IconProps['variant'] | null;
}

const ProgressMapModule: FunctionComponent<ProgressMapModuleProps> = ({
                                                                          variant,
                                                                          title,
                                                                          state = "end",
                                                                          icon
                                                                      }) => {
    {/* TODO make them fill container */}

    return (
        <div className="flex items-start gap-[var(--Space-200,8px)] w-full px-[var(--Space-200,8px)]">
            <ProgressMapIcon variant={variant} state={state} />

            {variant === "completed" ? (
                <div className="flex items-center gap-[var(--Space-200,8px)] w-[264px] h-[51px] px-[var(--Space-200,8px)] flex-shrink-0 rounded-[var(--Radius-200,8px)] bg-[var(--Answers-ui-success,#58C25C)] shadow-[0px_2px_4px_0px_#DDE4E4]">
                    <span className="flex-1 overflow-hidden text-text-white text-ellipsis font-inter text-base leading-[120%] font-[400] line-clamp-1">
                        {title}
                    </span>
                    {icon && <Icon variant={icon} colorClass={"text-text-white"} />}
                </div>
            ) : (
                <div className="flex items-center gap-[var(--Space-200,8px)] w-[264px] h-[51px] px-[var(--Space-200,8px)] flex-shrink-0 rounded-[var(--Radius-200,8px)] border border-[0.25px] border-[var(--Grayscale-gray-100,#DDE4E4)] bg-white shadow-[0px_2px_4px_0px_#DDE4E4]">
                    <span className="flex-1 overflow-hidden text-text-black text-ellipsis font-inter text-base leading-[120%] font-[400] line-clamp-1">
                        {title}
                    </span>
                    {icon && <Icon variant={icon} colorClass={"text-text-black"} />}
                </div>
            )}
        </div>
    );
};

export default ProgressMapModule;
