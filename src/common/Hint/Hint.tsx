import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface HintProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof hintVariant> {}

const hintVariant = cva(
    [
        "flex",
        "justify-center",
        "items-center",
        "gap-[6px]",
        "rounded-full",
        "px-[3px]",
        "py-[1.5px]",
        "bg-primary-100",
        "text-black",
        "font-bold",
        "text-[12px]",
        "leading-[14.4px]",
        "font-inter",
    ],
    {
        variants: {},
        defaultVariants: {},
    }
);

const Hint: React.FC<HintProps> = ({ children, ...props }) => {
    return (
        <div className={hintVariant()} {...props}>
            {children}
        </div>
    );
};

export default Hint;
