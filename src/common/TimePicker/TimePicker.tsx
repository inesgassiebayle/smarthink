import type { FC, ChangeEvent } from 'react';
// Importa el ícono personalizado
import Icon from "../Icon/Icon";

interface TimeValue {
    hour: string;
    minute: string;
}

interface TimePickerProps {
    fromTime: TimeValue;
    toTime: TimeValue;
    onChangeFrom: (time: TimeValue) => void;
    onChangeTo: (time: TimeValue) => void;
    onCancel?: () => void;
    onAccept?: () => void;
}

const TimePicker: FC<TimePickerProps> = ({
                                             fromTime,
                                             toTime,
                                             onChangeFrom,
                                             onChangeTo,
                                             onCancel,
                                             onAccept
                                         }) => {
    const handleFromChange = (field: keyof TimeValue) => (event: ChangeEvent<HTMLInputElement>) => {
        onChangeFrom({
            ...fromTime,
            [field]: event.target.value.padStart(2, '0')
        });
    };

    const handleToChange = (field: keyof TimeValue) => (event: ChangeEvent<HTMLInputElement>) => {
        onChangeTo({
            ...toTime,
            [field]: event.target.value.padStart(2, '0')
        });
    };

    const TimeSection = ({ label, time, onChange }: {
        label: string;
        time: TimeValue;
        onChange: (field: keyof TimeValue) => (e: ChangeEvent<HTMLInputElement>) => void;
    }) => (
        <div className="w-full h-[243px] bg-grayscale-100 p-4 rounded-lg">
            <p className="text-text-black mb-4">{label}</p>
            <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                    <input
                        type="number"
                        min="0"
                        max="23"
                        value={time.hour}
                        onChange={onChange('hour')}
                        className="w-[128px] h-[72px] bg-primary-100 border-2 border-grayscale-200
                                 rounded-lg p-2 text-2xl text-center text-text-black focus:outline-none
                                 drop-shadow-lg"
                    />
                    <span className="text-black text-sm">Hour</span>
                </div>

                <span className="text-2xl font-bold">:</span>

                <div className="flex flex-col items-center gap-1">
                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={time.minute}
                        onChange={onChange('minute')}
                        className="w-[128px] h-[72px] bg-primary-100 border-2 border-grayscale-200
                                 rounded-lg p-2 text-2xl text-center text-black focus:outline-none
                                 drop-shadow-lg"
                    />
                    <span className="text-black text-sm">Minute</span>
                </div>
            </div>

            <div className="mt-[69px] flex items-center justify-between" style={{ marginTop: '32px' }}>
                <Icon variant="clock" size="medium" colorClass="w-6 h-6 text-primary-900" />
                <div className="flex gap-4">
                    <button
                        onClick={onCancel}
                        className="text-primary-900"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onAccept}
                        className="text-primary-900"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-8">
            <TimeSection
                label="From"
                time={fromTime}
                onChange={handleFromChange}
            />
            <TimeSection
                label="To"
                time={toTime}
                onChange={handleToChange}
            />
        </div>
    );
};

export default TimePicker;
