import { FunctionComponent } from "react";
import defaultIcon from '../../assets/map_icon_default.svg';
import inProgressIcon from '../../assets/map_icon_in_progress.svg';
import completedIcon from '../../assets/map_icon_completed.svg';

export interface ProgressMapIconProps {
    variant: "completed" | "in-progress" | "default";
    state?: "end" | "middle";
}

const ProgressMapIcon: FunctionComponent<ProgressMapIconProps> = ({ variant, state = "end" }) => {
    const variantMap = {
        "completed": completedIcon,
        "in-progress": inProgressIcon,
        "default": defaultIcon,
    };

    return (
        <div className="flex flex-col items-center w-[48px]">
            <img src={variantMap[variant]} alt="map icon" style={{ width: '48px', height: '48px' }} />
            {state === "middle" && (
                variant === "completed" ? (
                    <div className="w-[8px] h-[42px] bg-state-succes"></div>
                ) : variant === "default" ? (
                    <div className="w-[8px] h-[42px] bg-grayscale-100"></div>
                ) : (
                    <>
                        <div className="w-[8px] h-[21px] bg-state-succes"></div>
                        <div className="w-[8px] h-[21px] bg-grayscale-100"></div>
                    </>
                )
            )}
        </div>
    );
};

export default ProgressMapIcon;
