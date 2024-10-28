import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "../Icon/Icon";

export interface NavItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof navItemVariant> {
    active: boolean;
    variant: "home" | "heart" | "bookmark";
}

const navItemVariant = cva(
    "inline-flex items-center justify-center transition-all rounded-full",
    {
        variants: {
            variant: {
                home: [],
                heart: [],
                bookmark: [],
            },
        },
    }
);

export default function NavItem({
                                    variant,
                                    active,
                                    ...props
                                }: NavItemProps) {
    return (
        <button
            className={`${navItemVariant({ variant })} w-8 h-8`}
            {...props}
        >
            <Icon
                variant={variant}
                size="medium"
                fill={active}
            />
        </button>
    );
}
