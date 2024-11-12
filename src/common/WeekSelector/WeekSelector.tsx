import React, { useState } from 'react';
import DaySelector, {DayConfig} from "../DaySelector/DaySelector";

export interface WeekSelectorProps {
    onChange?: (selectedDays: string[]) => void;
}

const DAYS_CONFIG: DayConfig[] = [
    { id: 'sunday', display: 'S' },
    { id: 'monday', display: 'M' },
    { id: 'tuesday', display: 'T' },
    { id: 'wednesday', display: 'W' },
    { id: 'thursday', display: 'T' },
    { id: 'friday', display: 'F' },
    { id: 'saturday', display: 'S' }
];

const WeekSelector: React.FC<WeekSelectorProps> = ({ onChange }) => {
    const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set());

    const toggleDay = (dayId: string) => {
        const newSelectedDays = new Set(selectedDays);
        if (selectedDays.has(dayId)) {
            newSelectedDays.delete(dayId);
        } else {
            newSelectedDays.add(dayId);
        }
        setSelectedDays(newSelectedDays);
        onChange?.(Array.from(newSelectedDays));
    };

    return (
        <div className="flex space-x-2">
            {DAYS_CONFIG.map((dayConfig) => (
                <DaySelector
                    key={dayConfig.id}
                    dayConfig={dayConfig}
                    selected={selectedDays.has(dayConfig.id)}
                    onClick={() => toggleDay(dayConfig.id)}
                />
            ))}
        </div>
    );
};

export default WeekSelector;