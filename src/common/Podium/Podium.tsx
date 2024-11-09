import { FunctionComponent } from "react";
import Avatar from "../Avatar/Avatar";
import crown from "../../assets/crown.svg";

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
        <div className="flex w-full h-full pt-2 justify-center items-end gap-[16px]">
            <div className="flex flex-col items-center w-[80px] h-[160px] bg-primary-300 rounded-t-full p-2">
                <Avatar imageSrc={second} size={"large"} />
                <p className="text-center text-white font-inter text-[12px] font-bold mt-2">#2</p>
                <span className="text-center text-white font-inter text-[10px] truncate max-w-[60px] overflow-hidden whitespace-nowrap">
                    {second_username}
                </span>
            </div>

            <div className="flex flex-col items-center w-[100px] h-[180px] bg-primary-500 rounded-t-full p-2 relative">
                <img src={crown} alt="crown" className="absolute top-[-20px] w-[24px] h-[24px]" />
                <Avatar imageSrc={first} size={"xlarge"} />
                <p className="text-center text-white font-inter text-[12px] font-bold mt-2">#1</p>
                <span className="text-center text-white font-inter text-[10px] truncate max-w-[80px] overflow-hidden whitespace-nowrap">
                    {first_username}
                </span>
            </div>

            <div className="flex flex-col items-center w-[80px] h-[140px] bg-primary-100 rounded-t-full p-2">
                <Avatar imageSrc={third} size={"large"} />
                <p className="text-center text-white font-inter text-[12px] font-bold mt-2">#3</p>
                <span className="text-center text-white font-inter text-[10px] truncate max-w-[60px] overflow-hidden whitespace-nowrap">
                    {third_username}
                </span>
            </div>
        </div>
    );
};

export default Podium;
