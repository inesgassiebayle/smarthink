import { FunctionComponent } from "react";
import Icon from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export interface HeaderIconProps {
    onClick: () => void;
    variant: "menu" | "explore" | "empty";
}

const HeaderIcon: FunctionComponent<HeaderIconProps> = ({
                                                            onClick,
                                                            variant = "empty",
                                                        }) => {
    return (
        <ButtonIcon onClick={onClick} size={"medium"} variant={variant} filled={false} colorClass={"text-primary-500 hover:text-primary-800"}/>
    );
};

export default HeaderIcon;
