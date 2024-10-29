import {FunctionComponent} from "react";
import defaultIcon from '../../assets/map_icon_default.svg';
import inProgressIcon from '../../assets/map_icon_in_progress.svg';
import completedIcon from '../../assets/map_icon_completed.svg';


export interface ProgressMapIconProps {
    variant: "completed" | "in-progress" | "default";
}

const ProgressMapIcon: FunctionComponent<ProgressMapIconProps> = ({variant}) => {

    const variantMap = {
        "completed": completedIcon,
        "in-progress": inProgressIcon,
        "default": defaultIcon,
    }
    return(
        <img src={variantMap[variant]} alt="map icon" style={{width: '48px', height: '48px'}}/>

    );
};
export default ProgressMapIcon;