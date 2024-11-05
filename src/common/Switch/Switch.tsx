import { useState, FunctionComponent } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export interface SwitchProps {
    initialActive?: boolean;
    onToggle?: (active: boolean) => void;
}

const Switch: FunctionComponent<SwitchProps> = ({ initialActive = false, onToggle }) => {
    const [isActive, setIsActive] = useState(initialActive);

    const handleToggle = () => {
        const newActiveState = !isActive;
        setIsActive(newActiveState);
        if (onToggle) onToggle(newActiveState);
    };

    return (
        <ButtonIcon
            onClick={handleToggle}
            variant={"switch"}
            filled={!isActive}
            size="medium"
            colorClass={isActive ? "text-primary-100" : "text-primary-500"}
        />
    );
};

export default Switch;
