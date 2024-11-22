import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import Icon from "../Icon/Icon";

export interface CalendarComponentProps {
    onDateChange?: (newDate: Date) => void;
    initialDate?: Date | number;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
                                                                 onDateChange,
                                                                 initialDate = new Date(2024, 10, 5),
                                                             }) => {
    const [date, setDate] = useState<Value>(
        typeof initialDate === "number" ? new Date(initialDate) : initialDate
    );

    useEffect(() => {
        const validDate =
            typeof initialDate === "number" ? new Date(initialDate) : initialDate;
        setDate(validDate);
        console.log("Initial date set to:", validDate);
    }, [initialDate]);

    const handleDateChange = (newDate: Value) => {
        setDate(newDate);
        if (onDateChange && newDate instanceof Date) {
            onDateChange(newDate);
        }
    };

    const getTileClassName = ({ date: tileDate, view }: { date: Date; view: string }) => {
        if (view === "month") {
            if (date instanceof Date && tileDate.toDateString() === date.toDateString()) {
                return "selected-date";
            }
        }
        return "";
    };


    const customStyles = `
    .react-calendar {
        border: 1px solid #29B1B5 !important;
        font-family: Arial, sans-serif;
    }

    .react-calendar__tile {
        padding: 0.75em 0.5em;
        height: auto;
        border-radius: 50%; /* Hace que la celda sea redonda */
        display: flex;
        justify-content: center;
        align-items: center;
        color: black !important;
        background: none !important;
    }

    .react-calendar__month-view__days__day--weekend {
        color: black !important;
    }

    .react-calendar__tile--now {
        background: none !important;
    }

   .selected-date {
        background-color: #29B1B5 !important;
        color: white !important;          
        border-radius: 50% !important;     
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-calendar__month-view__weekdays {
        border-top: 0.5px solid #000000;
        border-bottom: 0.5px solid #000000;
    }

    .react-calendar__navigation button {
        background: none;
        border: none;
    }
    .react-calendar__month-view__weekdays__weekday * {
        border: none !important;
        outline: none !important;
        text-decoration: none !important;
    }

    .react-calendar__navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em 1em;
        margin-bottom: 0.5em;
        width: 100%;
    }

    .react-calendar__navigation .react-calendar__navigation__label {
        font-size: 1.2em;
        margin-top: 0.25em;
        text-align: center;
        flex-grow: 1;
    }

    .react-calendar__navigation button {
        background: none;
        border: none;
        padding: 0.5em;
    }

    .react-calendar__navigation button:hover {
        background: none !important;
        color: #000 !important;
    }
`;

    return (
        <div className={`p-4 bg-white rounded-lg shadow-md`}>
            <style>{customStyles}</style>
            <Calendar
                value={date}
                onChange={handleDateChange}
                className="w-full text-center rounded-lg border-grayscale-300 shadow-sm"
                tileClassName={getTileClassName}
                navigationLabel={({ label }) => (
                    <span className="text-primary-500 font-semibold">{label}</span>
                )}
                nextLabel={<Icon variant="switch_right" size="medium" colorClass="text-primary-500" />}
                prevLabel={<Icon variant="switch_left" size="medium" colorClass="text-primary-500" />}
                next2Label={null}
                prev2Label={null}
                locale="en-US"
            />
        </div>
    );
};

export default CalendarComponent;
