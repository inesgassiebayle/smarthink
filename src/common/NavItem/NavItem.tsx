import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import {
    FavoriteBorderOutlined,
    FmdGoodOutlined,
    BookmarkBorderOutlined,
    Bookmark,
    Favorite,
    FmdGood,
} from "@mui/icons-material";

export interface NavItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof navItemVariant> {
    active: boolean;
}

const navItemVariant = cva(
    "inline-flex items-center justify-center transition-all rounded-full",
    {
        variants: {
            variant: {
                explore: [],
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
            {variant === "explore" && !active && (
                <FmdGoodOutlined className="w-6 h-6 text-primary-500" />
            )}
            {variant === "explore" && active && (
                <FmdGood className="w-6 h-6 text-primary-500" />
            )}

            {variant === "heart" && !active && (
                <FavoriteBorderOutlined className="w-6 h-6 text-primary-500" />
            )}
            {variant === "heart" && active && (
                <Favorite className="w-6 h-6 text-primary-500" />
            )}

            {variant === "bookmark" && !active && (
                <BookmarkBorderOutlined className="w-6 h-6 text-primary-500" />
            )}
            {variant === "bookmark" && active && (
                <Bookmark className="w-6 h-6 text-primary-500" />
            )}
        </button>
    );
}
