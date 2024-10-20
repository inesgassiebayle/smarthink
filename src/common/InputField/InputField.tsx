import { FunctionComponent } from "react";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariant> {
    icon?: FunctionComponent<any>;
}

const inputVariant = cva(
    ["rounded-lg", "px-4", "py-2", "w-full", "border", "focus:outline-none", "h-16"],
    {
        variants: {
            state: {
                default: [
                    "border-grayscale-500",
                    "focus:border-primary-500",
                    "hover:border-primary-500",
                ],
                error: [
                    "border-state-error",
                    "focus:border-state-error",
                    "hover:border-state-error",
                ],
                disabled: [
                    "border-primary-100",
                    "text-primary-100",
                    "cursor-not-allowed",
                ],
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export default function InputField({ state, icon: Icon, ...props }: InputProps) {
    return (
        <div className="relative inline-flex items-center w-full">
            <input
                className={inputVariant({ state })}
                {...props}
            />
            {Icon && (
                <Icon
                    className={`absolute right-3 w-icon-medium h-icon-medium ${state === "error" ? "text-state-error" : state === "disabled" ? "text-primary-100" : "text-primary-500"}`}
                />
            )}
        </div>
    );
}
