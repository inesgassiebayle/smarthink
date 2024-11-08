import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export interface NavItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof navItemVariant> {
    active: boolean;
    variant: "home" | "heart" | "bookmark";
    onClick: () => void;
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
                                    onClick,
                                    ...props
                                }: NavItemProps) {
    return (
        <button
            className={`${navItemVariant({ variant })} w-8 h-8`}
            {...props}
        >
            <ButtonIcon
                onClick={onClick}
                variant={variant}
                size="medium"
                filled={active}
            />
        </button>
    );
}
