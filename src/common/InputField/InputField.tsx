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
                    "text-grayscale-300",
                    "cursor-not-allowed",
                    "placeholder:text-disabled",
                ],
                active: [
                    "border-primary-500",
                    "text-black",
                    "focus:border-primary-500",
                    "hover:border-primary-600",
                    "placeholder:text-grayscale-500",
                ],
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export default function InputField({
                                       state = "default",
                                       icon,
                                       disabled,
                                       iconProps,
                                       onClick = () => {},
                                       ...props
                                   }: InputProps) {
    const iconColorClass = disabled
        ? "text-primary-100"
        : state === "error"
            ? "text-state-error"
            : "text-primary-500";

    return (
        <div className="relative w-full">
            <input
                className={`${inputVariant({ state: disabled ? "disabled" : state })} w-full pr-10 placeholder-truncate placeholder:text-ellipsis`}
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
                        colorClass={iconColorClass}
                        {...iconProps}
                    />
                </button>
            )}
        </div>
    );
}