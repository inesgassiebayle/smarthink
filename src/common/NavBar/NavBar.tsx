import React, { useState, useEffect, useCallback } from "react";
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
    onClick1?: () => void;
    onClick2?: () => void;
    onClick3?: () => void;
}

export default function NavBar({ index = null, onClick1, onClick2, onClick3 }: NavBarProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(index);

    useEffect(() => {
        setActiveIndex(index);
    }, [index]);

    const handleNavItemClick = useCallback((clickedIndex: number) => {
        const onClickFunctions = [onClick1, onClick2, onClick3];
        if (onClickFunctions[clickedIndex]) {
            onClickFunctions[clickedIndex]!();
        }
        setActiveIndex(clickedIndex === activeIndex ? null : clickedIndex);
    }, [activeIndex, onClick1, onClick2, onClick3]);

    const items: { variant: "bookmark" | "home" | "heart"; active: boolean }[] = [
        { variant: "bookmark", active: activeIndex === 0 },
        { variant: "home", active: activeIndex === 1 },
        { variant: "heart", active: activeIndex === 2 },
    ];

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
