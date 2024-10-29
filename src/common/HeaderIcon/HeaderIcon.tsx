import { FunctionComponent } from "react";
import Icon from "../Icon/Icon";

export interface HeaderIconProps {
    onClick: () => void;
    variant: "menu" | "explore" | "empty";
}

const HeaderIcon: FunctionComponent<HeaderIconProps> = ({
                                                            onClick,
                                                            variant = "empty",
                                                        }) => {
    return (
        <button onClick={onClick} disabled={variant === "empty"}>
            <Icon variant={variant} size="medium" fill={false} />
        </button>
    );
};

export default HeaderIcon;
