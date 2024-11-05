import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import Icon, { IconProps } from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariant> {
    icon?: IconProps['variant'] | null;
    iconProps?: Omit<IconProps, "size">;
    onClick?: () => void;
}

const inputVariant = cva(
    ["flex w-full p-4 items-center gap-2 rounded-md border bg-white focus:outline-none focus:ring-0 items-center"],
    {
        variants: {
            state: {
                default: [
                    "border-grayscale-500",
                    "text-grayscale-500",
                    "hover:border-primary-500",
                    "focus:border-primary-500",
                    "placeholder:text-grayscale-500",
                ],
                error: [
                    "border-state-error",
                    "text-black",
                    "focus:border-state-error",
                    "hover:border-state-error",
                    "placeholder:text-state-error",
                ],
                disabled: [
                    "bg-white",
                    "border-primary-100",
                    "text-primary-100",
                    "cursor-not-allowed",
                    "placeholder:text-disabled",
                ],
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export default function InputField({ state, icon, disabled, iconProps, onClick = () => {}, ...props }: InputProps) {
    return (
        <div className="relative w-full">
            <input
                className={`${inputVariant({ state: disabled ? "disabled" : state })} w-full pr-10`}
                disabled={disabled}
                {...props}
            />
            {icon && (
                <button
                    type="button"
                    onClick={onClick}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    disabled={disabled}
                >
                    <ButtonIcon
                        onClick={onClick}
                        variant={icon}
                        size="medium"
                        colorClass={disabled ? "text-primary-100" : "text-primary-500"}
                        {...iconProps}
                    />
                </button>
            )}
        </div>
    );
}


