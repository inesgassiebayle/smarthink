import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { cva } from "class-variance-authority";

const navBarVariant = cva(["bg-white", "flex", "justify-between", "items-center", "w-[360px]", "h-[80px]", "border-t-2", "border-primary-500", "mx-auto", "px-8"]);

export default function NavBar() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const items: { variant: "explore" | "bookmark" | "heart"; active: boolean }[] = [
        { variant: "explore", active: activeIndex === 0 },
        { variant: "bookmark", active: activeIndex === 1 },
        { variant: "heart", active: activeIndex === 2 },
    ];

    const handleNavItemClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <nav className={navBarVariant()}>
            {items.map((item, index) => (
                <NavItem
                    key={index}
                    variant={item.variant}
                    active={item.active}
                    onClick={() => handleNavItemClick(index)}
                />
            ))}
        </nav>
    );
}
