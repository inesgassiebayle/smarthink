import {FunctionComponent} from "react";
import PersonTag from "../TeacherTag/PersonTag";

export interface RankingCardProps {
    personPicture: string;
    personUsername: string;
    points: string;
};

const RankingCard : FunctionComponent<RankingCardProps> = ({personUsername, personPicture, points}) => {
    return (
        <div className="flex items-center gap-[var(--Space-200,8px)] w-full py-[var(--Space-200,8px)]">
            <PersonTag name={personUsername} avatarSrc={personPicture} size={"large"}/>
            <text className="text-primary-900 font-inter text-sm font-bold">
                {points}
            </text>
        </div>
    )
};
export default RankingCard;