import {FunctionComponent} from "react";
import {IconProps} from "../Icon/Icon";
import HeaderIcon from "../HeaderIcon/HeaderIcon";

export interface HeaderProps {
    title: string;
    icon1?: "empty" | "menu" | "explore";
    icon2?: "empty" | "menu" | "explore";
    icon3?: "empty" | "menu" | "explore";
    icon4?: "empty" | "menu" | "explore";
    onIconClick1?: () => void;
    onIconClick2?: () => void;
    onIconClick3?: () => void;
    onIconClick4?: () => void;
}

const Header:FunctionComponent<HeaderProps> = ({title, icon1 = "empty", icon2 = "empty", icon3 = "empty", icon4 = "empty", onIconClick1 = ()=>{}, onIconClick2 = ()=>{}, onIconClick3 = ()=>{}, onIconClick4 = ()=>{}}) => {
    return (
        <div className="flex w-[360px] h-[88px] p-[var(--Icon-Small,24px)] justify-center items-center gap-[var(--Space-400,16px)]">
            <HeaderIcon variant={icon1} onClick={onIconClick1}/>
            <HeaderIcon variant={icon2} onClick={onIconClick2}/>
            <span className="text-primary-500 text-text-titles text-center font-inter text-h5 font-regular leading-[120%] max-w-[264px] flex-[1_0_0]">
                {title}
            </span>
            <HeaderIcon variant={icon3} onClick={onIconClick3}/>
            <HeaderIcon variant={icon4} onClick={onIconClick4}/>
        </div>


    );
};
export default Header;