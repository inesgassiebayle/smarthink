import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const tabVariant = cva(
    ["flex w-full p-4 flex-col items-center gap-4"],
    {
        variants: {
            state: {
                default: "text-grayscale-500",
                active: "text-primary-500 border-b-[3px] border-primary-500",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

interface TabProps extends VariantProps<typeof tabVariant> {
    children: React.ReactNode;
    onClick: () => void;
}


const Tab = ({ state = "default", children, onClick }: TabProps) => {
    return (
        <div className={tabVariant({ state })} onClick={onClick}>
            <span className="flex-1 text-center truncate overflow-hidden whitespace-nowrap self-stretch font-inter text-sm font-bold leading-[120%]">
                {children}
            </span>
        </div>
    );
};

export default Tab;
