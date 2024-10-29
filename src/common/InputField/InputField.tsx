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
    ["flex w-[296px] p-4 items-center gap-2 rounded-md border bg-white focus:outline-none focus:ring-0 items-center"],
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
        <div className="inline-flex items-center w-full">
            <input
                className={inputVariant({ state })}
                disabled={state === "disabled" || disabled}
                {...props}


            />
            {icon && (
                <div className="cursor-pointer relative">
                    <ButtonIcon
                        onClick={onClick}
                        variant={icon}
                        size="medium"
                        {...iconProps}
                    />
                </div>
            )}
        </div>
    );
}
