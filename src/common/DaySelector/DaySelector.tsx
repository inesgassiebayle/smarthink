import React, { useState } from 'react';

export interface DaySelectorProps {
    day: 'S' | 'M' | 'T' | 'W' | 'T' | 'F' | 'S';
}

const DaySelector: React.FC<DaySelectorProps> = ({ day }) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected((prevSelected) => !prevSelected);
    };

    return (
        <div
            onClick={toggleSelected}
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
                  ${selected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
        >
            {day}
        </div>
    );
};

export default DaySelector;
