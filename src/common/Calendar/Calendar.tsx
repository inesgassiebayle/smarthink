import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import Icon from "../Icon/Icon";

export interface CalendarComponentProps {
    onDateChange?: (newDate: Date) => void;
    initialDate?: Date;
    className?: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
                                                                 onDateChange,
                                                                 initialDate = new Date(),
                                                                 className = "",
                                                             }) => {
    const [date, setDate] = useState<Value>(initialDate);

    useEffect(() => {
        setDate(initialDate);
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

    /* Estilos específicos para la fecha seleccionada */
   .selected-date {
        background-color: #29B1B5 !important; /* Fondo del día seleccionado */
        color: white !important;             /* Color del texto del día */
        border-radius: 50% !important;       /* Asegúrate de que el borde sea circular */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Línea divisoria encima de los nombres de los días */
    .react-calendar__month-view__weekdays {
        border-top: 0.5px solid #000000;
        border-bottom: 0.5px solid #000000;
    }

    /* Estilo para los botones de navegación */
    .react-calendar__navigation button {
        background: none;
        border: none;
    }
    .react-calendar__month-view__weekdays__weekday * {
        border: none !important;
        outline: none !important;
        text-decoration: none !important;
    }

    /* Estilos para las flechas y el nombre del mes */
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

    /* Eliminar el hover de las flechas de navegación */
    .react-calendar__navigation button:hover {
        background: none !important;
        color: #000 !important;
    }
`;

    return (
        <div className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
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
