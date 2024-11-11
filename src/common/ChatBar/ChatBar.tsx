import React from 'react';
import { FunctionComponent } from 'react';
import Icon from '../Icon/Icon';

interface ChatBarProps {
    text: string;
    onTextChange: (text: string) => void;
}

const ChatBar: FunctionComponent<ChatBarProps> = ({ text, onTextChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTextChange(event.target.value);
    };

    return (
        <div className="w-full relative rounded-t-2xl rounded-b-none bg-primary-100 h-20 flex flex-row items-center justify-center py-4 px-2 box-border gap-4">
            <div className="overflow-hidden flex flex-row items-center justify-center">
                <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-row items-center justify-center p-0.5 box-border">
                    <Icon variant="add" size="small" colorClass="text-primary-900" />
                </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center">
                <div className="w-[15.5px] h-[15.5px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-px box-border">
                    <Icon variant={"smiley"} size="small" colorClass={"text-primary-900"} />
                </div>
            </div>
            <div className="self-stretch flex-1 rounded-[28px] bg-grayscale-white flex flex-row items-center justify-between py-4 px-6">
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder=""
                    className="flex-1 bg-transparent border-none outline-none text-base text-primary-900" // Cambié a text-lg para hacerlo más grande
                />
                <Icon variant={"mic"} size={"medium"} colorClass={"text-primary-900"} />
            </div>
            <button onClick={() => {}} className="hidden">Enviar</button>
        </div>
    );
};

export default ChatBar;