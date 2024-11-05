import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { cva } from "class-variance-authority";

const navBarVariant = cva([
    "fixed bottom-0",
    "bg-white",
    "flex",
    "justify-between",
    "items-center",
    "w-full",
    "h-[80px]",
    "border-t-2",
    "border-primary-500",
    "mx-auto",
    "px-8",
]);


export interface NavBarProps {
    index?: number | null;
}

export default function NavBar({ index = null }: NavBarProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(index);

    const items: { variant: "home" | "bookmark" | "heart"; active: boolean }[] = [
        { variant: "bookmark", active: activeIndex === 0 },
        { variant: "home", active: activeIndex === 1 },
        { variant: "heart", active: activeIndex === 2 },
    ];

    const handleNavItemClick = (clickedIndex: number) => {
        if (clickedIndex === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(clickedIndex);
        }
    };

    return (
        <nav className={navBarVariant()}>
            {items.map((item, itemIndex) => (
                <NavItem
                    key={itemIndex}
                    variant={item.variant}
                    active={item.active}
                    onClick={() => handleNavItemClick(itemIndex)}
                />
            ))}
        </nav>
    );
}
