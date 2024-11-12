import React, { useState } from 'react';
import DaySelector, { DayType } from "../DaySelector/DaySelector";

export interface WeekSelectorProps {
    onChange?: (selectedDays: DayType[]) => void;
}

const DAYS: DayType[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];

const WeekSelector: React.FC<WeekSelectorProps> = ({ onChange }) => {
    const [selectedDays, setSelectedDays] = useState<Set<DayType>>(new Set());

    const toggleDay = (day: DayType) => {
        const newSelectedDays = new Set(selectedDays);
        if (selectedDays.has(day)) {
            newSelectedDays.delete(day);
        } else {
            newSelectedDays.add(day);
        }
        setSelectedDays(newSelectedDays);
        onChange?.(Array.from(newSelectedDays));
    };

    return (
        <div className="flex space-x-2">
            {DAYS.map((day) => (
                <DaySelector
                    key={day}
                    day={day}
                />
            ))}
        </div>
    );
};

export default WeekSelector;