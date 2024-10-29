import React from 'react';
import RankingCard, { RankingCardProps } from '../RankingCard/RankingCard';

export interface RankingTableProps {
    rankings: RankingCardProps[];
}

const RankingTable: React.FC<RankingTableProps> = ({ rankings }) => {
    const sortedRankings = [...rankings].sort((a, b) => Number(b.points) - Number(a.points));
    {/* TODO hide scrollbar for mobile */}
    return (
        <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar-hide">
            {sortedRankings.map((rank, index) => (
                <div
                    key={index}
                    className={`flex flex-col w-full ${index < sortedRankings.length - 1 ? 'border-b border-primary-900' : ''}`}
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
