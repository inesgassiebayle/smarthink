import { FunctionComponent } from "react";
import NumberIcon from "../NumberIcon/NumberIcon";
import Avatar from "../Avatar/Avatar";

export interface PodiumProps {
    first: string;
    first_username: string;
    second: string;
    second_username: string;
    third: string;
    third_username: string;
}

const Podium: FunctionComponent<PodiumProps> = ({ first, first_username, second, second_username, third, third_username }) => {
    return (
        <div className="flex justify-center items-end gap-[var(--Space-200,8px)] flex-1 self-stretch py-[var(--Space-200,8px)]">
            <div className="flex flex-col justify-center items-center gap-[var(--Space-200,8px)] w-16">
                <div className="flex flex-col items-center gap-[var(--Space-200,8px)] h-24 py-[var(--Space-200,8px)] self-stretch rounded-[var(--Icon-Small,24px)] bg-[var(--Primary-ui-primary-200,#7FD0D3)] shadow-[0px_2px_4px_1px_rgba(0,0,0,0.25)]">
                    <NumberIcon number={2} size={"large"} colorClass={"white"} />
                </div>
                <div className="flex h-18 flex-col justify-center items-center gap-[var(--Space-200, 8px)]">
                    <Avatar imageSrc={second} size={"small"} />
                    <span className="text-text-black text-center font-inter text-xs leading-[120%] self-stretch whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px]">
                        {second_username}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[var(--Space-200,8px)] w-16">
                <div className="flex justify-center items-start gap-[var(--Space-200,8px)] h-32 py-[var(--Space-200,8px)] self-stretch rounded-[var(--Icon-Small,24px)] bg-[var(--Primary-ui-primary-500,#29B1B5)] shadow-[0px_2px_4px_1px_rgba(0,0,0,0.25)]">
                    <NumberIcon number={1} size={"large"} colorClass={"white"} />
                </div>
                <div className="flex h-18 flex-col justify-center items-center gap-[var(--Space-200, 8px)]">
                    <Avatar imageSrc={first} size={"small"} />
                    <span className="text-text-black text-center font-inter text-xs leading-[120%] self-stretch whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px]">
                        {first_username}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[var(--Space-200,8px)] w-16">
                <div className="flex justify-center items-start gap-[var(--Space-200,8px)] h-16 py-[var(--Space-200,8px)] self-stretch rounded-[var(--Icon-Small,24px)] bg-[var(--Primary-ui-primary-100,#A9E0E1)] shadow-[0px_2px_4px_1px_rgba(0,0,0,0.25)]">
                    <NumberIcon number={3} size={"large"} colorClass={"white"} />
                </div>
                <div className="flex h-18 flex-col justify-center items-center gap-[var(--Space-200, 8px)]">
                    <Avatar imageSrc={third} size={"small"} />
                    <span className="text-text-black text-center font-inter text-xs leading-[120%] self-stretch whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px]">
                        {third_username}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Podium;
