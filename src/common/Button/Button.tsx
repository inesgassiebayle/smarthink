import { FunctionComponent } from "react";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
    icon?: FunctionComponent<any>;
}

const buttonVariant = cva(["rounded-3xl", "inline-flex", "items-center", "justify-center"], {
    variants: {
        size: {
            small: ["text-sm font-bold py-2 px-4"],
            medium: ["text-base font-bold py-2 px-4"],
            large: ["text-h5 font-bold py-2 px-4"],
        },
        variant: {
            outlined: [
                "bg-transparent text-primary-500 border border-primary-500",
                "hover:bg-transparent hover:text-primary-800 hover:border-primary-800",
                "disabled:bg-transparent disabled:text-primary-100 disabled:border-primary-100",
            ],
            filled: [
                "bg-primary-500 text-white",
                "hover:bg-primary-800 hover:text-white",
                "disabled:bg-primary-100 disabled:text-white",
            ]
        },
    }
});

export default function Button({ variant, size, icon: Icon, ...props }: ButtonProps) {
    return (
        <button className={buttonVariant({ size, variant })} {...props}>
            {props.children}
            {Icon && (
                <Icon
                    className={`
            ${size === "small" ? "w-icon-small h-icon-small" : ""}
            ${size === "medium" ? "w-icon-medium h-icon-medium" : ""}
            ${size === "large" ? "w-icon-large h-icon-large" : ""}
            ml-2
          `}
                />
            )}
        </button>
    );
}
