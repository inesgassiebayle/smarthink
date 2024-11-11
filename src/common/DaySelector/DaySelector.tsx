import React from 'react';

export interface DaySelectorProps {
    day: 'S' | 'M' | 'T' | 'W' | 'T' | 'F' | 'S';
    selected: boolean;
}

const DaySelector: React.FC<DaySelectorProps> = ({ day, selected }) => {
    return (
        <div
            className={`w-10 h-10 flex items-center justify-center rounded-full 
                  ${selected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
        >
            {day}
        </div>
    );
};

export default DaySelector;
