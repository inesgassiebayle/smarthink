import {FC, ChangeEvent, useRef, useState} from "react";
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
const TimeSection = ({
                         label,
                         localTime,
                         setLocalTime,
                         onOk,
                         onCancel,
                     }: {
    label: string;
    localTime: TimeValue;
    setLocalTime: React.Dispatch<React.SetStateAction<TimeValue>>;
    onOk: () => void;
    onCancel?: () => void;
}) => (
    <div
        className="flex flex-col w-fit h-fit items-start gap-4 p-4 rounded-[24px] border border-[var(--Grayscale-black)] bg-[var(--Schemes-On-Error)]"
        style={{padding: "16px"}}
    >
        <div className="text-grayscale-black font-inter text-[14px] leading-[140%]">
            {label}
        </div>
        <div className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
                <input
                    type="text"
                    value={localTime.hour}
                    onChange={(e) =>
                        /^\d{0,2}$/.test(e.target.value) &&
                        setLocalTime({...localTime, hour: e.target.value})
                    }
                    onBlur={() =>
                        setLocalTime((prev) => ({
                            ...prev,
                            hour: prev.hour.padStart(2, "0"),
                        }))
                    }
                    className="text-h1 text-text-black text-center border-2 border-grayscale-200 bg-primary-100 rounded-lg shadow-sm focus:outline-none"
                    style={{width: "120px", height: "72px"}}
                    placeholder="HH"
                    maxLength={2}
                />
            </div>
            <span className="text-h1 text-text-black">:</span>
            <div className="flex flex-col items-center gap-1">
                <input
                    type="text"
                    value={localTime.minute}
                    onChange={(e) =>
                        /^\d{0,2}$/.test(e.target.value) &&
                        setLocalTime({...localTime, minute: e.target.value})
                    }
                    onBlur={() =>
                        setLocalTime((prev) => ({
                            ...prev,
                            minute: prev.minute.padStart(2, "0"),
                        }))
                    }
                    className="text-h1 text-text-black text-center border-2 border-grayscale-200 bg-primary-100 rounded-lg shadow-sm focus:outline-none"
                    style={{width: "120px", height: "72px"}}
                    placeholder="MM"
                    maxLength={2}
                />
            </div>
        </div>

        <div className="flex items-center justify-between w-full">
            <Icon variant={"clock"} size={"medium"}/>
            <div className="flex items-center gap-3">
                <Button
                    variant={"textButton"}
                    size={"small"}
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    variant={"textButton"}
                    size={"small"}
                    onClick={onOk}
                >
                    Ok
                </Button>
            </div>
        </div>
    </div>
);

const TimePicker: FC<TimePickerProps> = ({
                                             fromTime,
                                             toTime,
                                             onChangeFrom,
                                             onChangeTo,
                                             onCancel,
                                             onAccept,
                                         }) => {
    const [localFromTime, setLocalFromTime] = useState(fromTime);
    const [localToTime, setLocalToTime] = useState(toTime);

    const handleAccept = (type: "from" | "to") => {
        if (type === "from") {
            onChangeFrom(localFromTime);
        } else if (type === "to") {
            onChangeTo(localToTime);
        }
        onAccept?.();
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-lg">
            <TimeSection
                label="From"
                localTime={localFromTime}
                setLocalTime={setLocalFromTime}
                onOk={() => handleAccept("from")}
                onCancel={onCancel}
            />
            <TimeSection
                label="To"
                localTime={localToTime}
                setLocalTime={setLocalToTime}
                onOk={() => handleAccept("to")}
                onCancel={onCancel}
            />
        </div>
    );
};

export default TimePicker;
