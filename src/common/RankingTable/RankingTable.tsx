import React from 'react';
import RankingCard, { RankingCardProps } from '../RankingCard/RankingCard';

export interface RankingTableProps {
    rankings: RankingCardProps[];
}

const RankingTable: React.FC<RankingTableProps> = ({ rankings }) => {
    const sortedRankings = [...rankings].sort((a, b) => Number(b.points) - Number(a.points));
    return (
        <div className="flex flex-col items-center w-full h-full overflow-y-auto scrollbar-hide">
            {sortedRankings.map((rank, index) => (
                <div
                    key={index}
                    className={`flex w-full ${index < sortedRankings.length - 1 ? 'border-b border-primary-900' : ''} py-2`}
                >
                    <RankingCard
                        personPicture={rank.personPicture}
                        personUsername={rank.personUsername}
                        points={rank.points}
                    />
                </div>
            ))}
        </div>
    );
};

export default RankingTable;
