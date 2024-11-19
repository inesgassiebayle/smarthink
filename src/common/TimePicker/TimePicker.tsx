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

    const handleAccept = (type: 'from' | 'to') => {
        if (type === 'from') {
            fromMinuteRef.current?.focus();
        } else if (type === 'to') {
            toMinuteRef.current?.focus();
        }
        onAccept?.();
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
        <div className="w-full max-w-lg bg-white border border-black p-4 md:p-6 lg:p-8 rounded-lg flex flex-col items-center">
            <p className="text-black mb-4 text-base sm:text-lg">{label}</p>
            <div className="relative flex flex-col sm:flex-row justify-start gap-4 sm:gap-8 w-full">
                <div className="flex w-full gap-4 justify-between">
                    <div className="flex flex-col items-center w-1/2 sm:w-[128px]">
                        <input
                            type="number"
                            min="0"
                            max="23"
                            value={time.hour}
                            onChange={onChange('hour')}
                            ref={hourRef}
                            className="w-full h-[60px] sm:h-[72px] bg-primary-100 border-2 border-grayscale-200
                                       rounded-lg p-2 text-xl sm:text-2xl text-center text-black focus:outline-none"
                        />
                        <span className="text-black text-xs sm:text-sm mt-1">Hour</span>
                    </div>

                    <div className="flex flex-col items-center w-1/2 sm:w-[128px]">
                        <input
                            type="number"
                            min="0"
                            max="59"
                            value={time.minute}
                            onChange={onChange('minute')}
                            ref={minuteRef}
                            className="w-full h-[60px] sm:h-[72px] bg-primary-100 border-2 border-grayscale-200
                                       rounded-lg p-2 text-xl sm:text-2xl text-center text-black focus:outline-none"
                        />
                        <span className="text-black text-xs sm:text-sm mt-1">Minute</span>
                    </div>
                </div>

                <div className="absolute left-1/2 top-8 sm:top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-2xl sm:text-3xl font-bold text-black">:</span>
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
        <div className="flex flex-col gap-8 w-full px-4 sm:px-8 lg:px-16">
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
