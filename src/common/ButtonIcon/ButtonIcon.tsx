import {FunctionComponent} from "react";
import Icon from "../Icon/Icon";

export interface ButtonIconProps {
    onClick: () => void;
    size: "small" | "medium" | "large";
    colorClass?: string;
    className?: string;
    filled?: boolean;
    disabled?: boolean;
    variant:
        | "explore"
        | "bookmark"
        | "heart"
        | "people"
        | "switch_left"
        | "switch_right"
        | "tick"
        | "clock"
        | "correct_circle"
        | "correct_square"
        | "incorrect_circle"
        | "incorrect_square"
        | "star"
        | "close"
        | "add"
        | "paper_clip"
        | "download"
        | "chat"
        | "chat_multiple"
        | "calendar"
        | "search"
        | "pencil"
        | "folder"
        | "bell"
        | "prize"
        | "export"
        | "circle"
        | "square"
        | "profile"
        | "pin"
        | "video"
        | "image"
        | "pause"
        | "play"
        | "back"
        | "menu"
        | "home"
        | "text"
        | "mic"
        | "smily"
        | "confetti"
        | "unlocked"
        | "empty"
        | "switch";
}

const ButtonIcon: FunctionComponent<ButtonIconProps> = ({onClick, variant, disabled , size, colorClass, filled=false}) => {
    return (
        <button onClick={onClick} disabled={disabled || false}>
            <Icon variant={variant} size={size} colorClass={colorClass} fill={filled}/>
        </button>
    )

};

export default ButtonIcon;
