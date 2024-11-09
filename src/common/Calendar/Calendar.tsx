import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";

export interface CalendarComponentProps {
    onDateChange?: (newDate: Date) => void;
    initialDate?: Date;
    className?: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
                                                                 onDateChange,
                                                                 initialDate = new Date(),
                                                                 className = '',
                                                             }) => {
    const [date, setDate] = useState<Value>(initialDate);

    const handleDateChange = (newDate: Value) => {
        setDate(newDate);
        if (onDateChange && newDate instanceof Date) {
            onDateChange(newDate);
        }
    };

    const getTileClassName = ({ date: tileDate, view }: { date: Date; view: string }) => {
        if (view === 'month' && tileDate.toDateString() === (date as Date).toDateString()) {
            return 'text-white bg-primary-500 font-semibold rounded-full';
        }
        return tileDate.getDay() === 0 ? 'text-red-600' : 'text-gray-700';
    };

    return (
        <div className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
            <Calendar
                value={date}
                onChange={handleDateChange}
                className="w-full text-center rounded-lg border border-grayscale-300 shadow-sm"
                tileClassName={getTileClassName}
                navigationLabel={({ label }) => (
                    <span className="text-primary-500 font-semibold">{label}</span>
                )}
                next2Label={null}
                prev2Label={null}
            />
        </div>
    );
};

export default CalendarComponent;
