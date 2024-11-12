import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import Icon from "../Icon/Icon";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

export interface ModuleCardProps extends VariantProps<typeof ModuleCardVariant> {
    id: string;
    variant: "horizontal" | "iconTick" | "circularProgress";
    title: string;
    avatarSource: string;
    courseSource: string;
    progress?: number;  // Se agrega para pasar el progreso a CircularProgressBar
    onClick?: () => void;
}

const ModuleCardVariant = cva(
    [
        "flex items-center gap-2 rounded-lg border bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]",
        "border-primary-100",
    ],
    {
        variants: {
            variant: {
                horizontal: ["w-full h-[80px] flex-shrink-0 overflow-hidden"], // Horizontal
                iconTick: ["w-full h-[80px] flex-shrink-0 overflow-hidden"], // Icono
                circularProgress: ["w-full h-[80px] flex-shrink-0 overflow-hidden"], // CircularProgressBar
            },
        },
    }
);

export default function ModuleCard({
                                       variant,
                                       title,
                                       avatarSource,
                                       courseSource,
                                       progress,
                                       onClick,
                                       ...props
                                   }: ModuleCardProps) {
    return (
        <div className={ModuleCardVariant({ variant })} onClick={onClick} {...props}>
            {variant === "horizontal" ? (
                <>
                    <div className="flex p-[var(--Space-200,8px)] px-[var(--Icon-Small,24px)] items-center gap-[var(--Space-400,16px)] flex-[1_0_0%] self-stretch w-[calc(100%-88px)] overflow-hidden">
                        <span className="text-text-black font-inter text-base font-regular leading-[120%] w-full overflow-hidden text-ellipsis">
                            {title}
                        </span>
                    </div>
                    <div className="flex items-center gap-8">
                        <Icon variant="tick" size="medium" colorClass="text-primary-500 w-5 h-5" />
                        <img
                            src={courseSource}
                            alt="Course Image"
                            className="w-[80px] h-[80px] object-cover rounded-r-lg overflow-hidden"
                        />
                    </div>
                </>
            ) : variant === "iconTick" ? (
                <>
                    <div className="flex p-[var(--Space-200,8px)] px-[var(--Icon-Small,24px)] items-center gap-[var(--Space-400,16px)] flex-[1_0_0%] self-stretch w-[calc(100%-88px)] overflow-hidden">
                        <span className="text-text-black font-inter text-base font-regular leading-[120%] w-full overflow-hidden text-ellipsis">
                            {title}
                        </span>
                    </div>
                    <div className="flex items-center gap-8">
                        <Icon variant="tick" size="medium" colorClass="text-primary-500 w-5 h-5" />
                        <img
                            src={courseSource}
                            alt="Course Image"
                            className="w-[80px] h-[80px] object-cover rounded-r-lg overflow-hidden"
                        />
                    </div>
                </>
            ) : variant === "circularProgress" ? (
                <>
                    <div className="flex p-[var(--Space-200,8px)] px-[var(--Icon-Small,24px)] items-center gap-[var(--Space-400,16px)] flex-[1_0_0%] self-stretch w-[calc(100%-88px)] overflow-hidden">
                        <span className="text-text-black font-inter text-base font-regular leading-[120%] w-full overflow-hidden text-ellipsis">
                            {title}
                        </span>
                    </div>
                    <div className="flex items-center gap-8">
                        <CircularProgressBar progress={progress || 0} size={40} />
                        <img
                            src={courseSource}
                            alt="Course Image"
                            className="w-[80px] h-[80px] object-cover rounded-r-lg overflow-hidden"
                        />
                    </div>
                </>
            ) : null}
        </div>
    );
}