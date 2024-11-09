import { FunctionComponent } from "react";
import Podium from "../Podium/Podium";
import RankingTable from "../RankingTable/RankingTable";
import { RankingCardProps } from "../RankingCard/RankingCard";

export interface QuizzRankingProps {
    people: RankingCardProps[];
}

const QuizzRanking: FunctionComponent<QuizzRankingProps> = ({ people }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <Podium
                first={people[0].personPicture}
                first_username={people[0].personUsername}
                second={people[1].personPicture}
                second_username={people[1].personUsername}
                third={people[2].personPicture}
                third_username={people[2].personUsername}
            />
            <div className="w-full max-w-md h-[300px] overflow-y-scroll">
                <RankingTable rankings={people} />
            </div>
        </div>
    );
};

export default QuizzRanking;
