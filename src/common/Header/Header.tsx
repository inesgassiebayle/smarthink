import { FunctionComponent } from "react";
import HeaderIcon from "../HeaderIcon/HeaderIcon";

export interface HeaderProps {
    title: string;
    icon1?: "empty" | "menu" | "explore" | "information" | "people" | "back" | "config";
    icon2?: "empty" | "menu" | "explore" | "information" | "people" | "back" | "config";
    icon3?: "empty" | "menu" | "explore" | "information" | "people" | "back" | "config";
    icon4?: "empty" | "menu" | "explore" | "information" | "people" | "back" | "config";
    onIconClick1?: () => void;
    onIconClick2?: () => void;
    onIconClick3?: () => void;
    onIconClick4?: () => void;
}

const Header: FunctionComponent<HeaderProps> = ({
                                                    title,
                                                    icon1 = "empty",
                                                    icon2 = "empty",
                                                    icon3 = "empty",
                                                    icon4 = "empty",
                                                    onIconClick1 = () => {},
                                                    onIconClick2 = () => {},
                                                    onIconClick3 = () => {},
                                                    onIconClick4 = () => {},
                                                }) => {
    return (
        <div className="fixed z-10 top-0 flex w-full h-[88px] p-6 justify-between items-center gap-4 bg-white border-b-2 border-primary-500">
            <div className="flex gap-4 p-2">
                <HeaderIcon variant={icon1} onClick={onIconClick1} />
                <HeaderIcon variant={icon2} onClick={onIconClick2} />
            </div>
            <span className="text-primary-500 text-center font-inter text-h5 font-regular leading-[120%] flex-1 line-clamp-2">
            {title}
        </span>
            <div className="flex gap-4 p-2">
                <HeaderIcon variant={icon3} onClick={onIconClick3} />
                <HeaderIcon variant={icon4} onClick={onIconClick4} />
            </div>
        </div>
);
};

export default Header;
