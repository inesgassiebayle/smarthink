import { useState, useEffect } from "react";
import Calendar from "react-calendar";  // Importar el calendario
import "react-calendar/dist/Calendar.css";
import {Value} from "react-calendar/dist/cjs/shared/types";  // Estilos de react-calendar

interface CalendarComponentProps {
    onDateChange?: (newDate: Date) => void;
    initialDate?: Date;  // Fecha inicial que viene como propiedad
    className?: string;
}
const CalendarComponent: React.FC<CalendarComponentProps> = () => {
    // Update the state type to match react-calendar's Value type
    const [date, setDate] = useState<Value>(new Date());

    // Update the handler to match the expected types from react-calendar
    const handleDateChange = (
        value: Value,
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        setDate(value);
        // Your additional date handling logic here
    };

    return (
        <div>
            <Calendar
                value={date}
                onChange={handleDateChange}
            />
            <div className="mt-4 text-center">
                {date instanceof Date && (
                    <p>Selected date: {date.toLocaleDateString()}</p>
                )}
            </div>
        </div>
    );
};

export default CalendarComponent;
