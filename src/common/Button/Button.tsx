import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import Icon, { IconProps } from "../Icon/Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    icon?: IconProps['variant'] | null;
    fill?: boolean;
    iconProps?: Omit<IconProps, "size">;
}

const buttonVariant = cva(
    ["rounded-3xl", "inline-flex", "items-center", "justify-between", "gap-2", "font-inter"],
    {
        variants: {
            size: {
                small: ["text-sm font-bold px-4 min-w-24 min-h-8"],
                medium: ["text-base font-bold px-4 min-w-[117px] min-h-10"],
                large: ["text-h5 font-bold px-4 min-w-[138px] min-h-12"],
            },
            variant: {
                outlined: [
                    "bg-transparent text-primary-500 border border-primary-500",
                    "hover:text-primary-800 hover:border-primary-800",
                    "disabled:text-primary-100 disabled:border-primary-100",
                ],
                filled: [
                    "bg-primary-500 text-white",
                    "hover:bg-primary-800",
                    "disabled:bg-primary-100 disabled:text-white",
                ],
                textButton: [
                    "bg-transparent text-primary-500",
                    "hover:text-primary-800",
                    "disabled:text-primary-100",
                ],
            },
        }
    }
);

export default function Button({
                                   variant,
                                   size = "medium",
                                   icon,
                                   fill = false,
                                   iconProps,
                                   disabled,
                                   ...props
                               }: ButtonProps) {

    const iconSize: IconProps['size'] = size || "medium";
    const colorClass =
        variant === "filled"
            ? "text-white"
            : disabled
                ? "text-primary-100"
                : "text-primary-500 hover:text-primary-800";

    const mergedIconProps = icon
        ? { variant: icon, fill, size: iconSize, colorClass, ...iconProps }
        : undefined;

    return (
        <button className={`${buttonVariant({ size, variant })} disabled:${disabled}`} disabled={disabled} {...props}>
            <span className="flex-1 basis-0">{props.children}</span>
            {mergedIconProps && (
                <Icon {...mergedIconProps} />
            )}
        </button>
    );
}
