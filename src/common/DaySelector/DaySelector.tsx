import React from 'react';

export interface DayConfig {
    id: string;
    display: string;
}

export interface DaySelectorProps {
    dayConfig: DayConfig;
    selected: boolean;
    onClick: () => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ dayConfig, selected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors
                ${selected ? 'bg-primary-500 text-white' : 'bg-gray-300 text-gray-500'}`}
        >
            {dayConfig.display}
        </div>
    );
};

export default DaySelector;
