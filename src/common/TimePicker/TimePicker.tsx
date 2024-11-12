import { FC, ChangeEvent, useRef } from 'react';
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

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
    const fromHourRef = useRef<HTMLInputElement>(null);
    const fromMinuteRef = useRef<HTMLInputElement>(null);
    const toHourRef = useRef<HTMLInputElement>(null);
    const toMinuteRef = useRef<HTMLInputElement>(null);

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

    const handleFromOk = () => {
        if (fromHourRef.current?.value) {
            fromMinuteRef.current?.focus();
        }
    };

    const handleToOk = () => {
        if (toHourRef.current?.value) {
            toMinuteRef.current?.focus();
        }
    };

    const handleAccept = (type: 'from' | 'to') => {
        if (type === 'from') {
            handleFromOk();
        } else if (type === 'to') {
            handleToOk();
        }
        if (onAccept) onAccept();
    };

    const TimeSection = ({
                             label,
                             time,
                             onChange,
                             hourRef,
                             minuteRef,
                             onOk
                         }: {
        label: string;
        time: TimeValue;
        onChange: (field: keyof TimeValue) => (e: ChangeEvent<HTMLInputElement>) => void;
        hourRef: React.RefObject<HTMLInputElement>;
        minuteRef: React.RefObject<HTMLInputElement>;
        onOk: () => void;


    }) => (
        <div className="w-full bg-grayscale-100 p-4 rounded-lg">
            <p className="text-black mb-4 text-base sm:text-lg">{label}</p>
            <div className="relative flex flex-col sm:flex-row justify-start sm:gap-8">
                <div className="flex gap-4 sm:gap-8 justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="number"
                            min="0"
                            max="23"
                            value={time.hour}
                            onChange={onChange('hour')}
                            ref={hourRef}
                            className="w-full sm:w-[128px] h-[72px] bg-primary-100 border-2 border-grayscale-200
                                       rounded-lg p-2 text-xl sm:text-2xl text-center text-black focus:outline-none drop-shadow-lg"
                            style={{
                                textAlign: 'center',
                                lineHeight: '72px',
                            }}
                        />
                        <span className="text-black text-xs sm:text-sm mt-1">Hour</span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="number"
                            min="0"
                            max="59"
                            value={time.minute}
                            onChange={onChange('minute')}
                            ref={minuteRef}
                            className="w-full sm:w-[128px] h-[72px] bg-primary-100 border-2 border-grayscale-200
                                       rounded-lg p-2 text-xl sm:text-2xl text-center text-black focus:outline-none drop-shadow-lg"
                            style={{
                                textAlign: 'center',
                                lineHeight: '72px',
                            }}
                        />
                        <span className="text-black text-xs sm:text-sm mt-1">Minute</span>
                    </div>
                </div>

                <div className="absolute left-1/2 top-4 -translate-x-1/2 mb-16 sm:mb-0">
                    <span className="text-h1 font-bold text-black">:</span>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between w-full">
                <Icon variant="clock" size="medium" colorClass="w-6 h-6 text-primary-900" />
                <div className="flex gap-4">
                    <Button variant="textButton" onClick={onCancel} className="text-primary-900 text-sm sm:text-base">
                        Cancel
                    </Button>
                    <Button
                        variant="textButton"
                        onClick={onOk}
                        className="text-primary-900 text-sm sm:text-base"
                    >
                        OK
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-8 w-full px-4 sm:px-0">
            <TimeSection
                label="From"
                time={fromTime}
                onChange={handleFromChange}
                hourRef={fromHourRef}
                minuteRef={fromMinuteRef}
                onOk={() => handleAccept('from')}
            />
            <TimeSection
                label="To"
                time={toTime}
                onChange={handleToChange}
                hourRef={toHourRef}
                minuteRef={toMinuteRef}
                onOk={() => handleAccept('to')}
            />
        </div>
    );
};

export default TimePicker;