import React, { useState } from 'react';

export type DayType = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export interface DaySelectorProps {
    day: DayType;
}

const dayDisplayMap: Record<DayType, string> = {
    sunday: 'S',
    monday: 'M',
    tuesday: 'T',
    wednesday: 'W',
    thursday: 'T',
    friday: 'F',
    saturday: 'S'
};

const DaySelector: React.FC<DaySelectorProps> = ({ day }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            onClick={() => setIsSelected(!isSelected)}
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors
                ${isSelected ? 'bg-primary-500 text-white' : 'bg-gray-300 text-gray-500'}`}
        >
            {dayDisplayMap[day]}
        </div>
    );
};

export default DaySelector;