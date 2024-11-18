import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import ButtonIcon from "../ButtonIcon/ButtonIcon";

interface ChatBarProps {
    text: string;
    onClickMic: () => void;
    onClickSend: () => void;
    onClickAdd: () => void;
    onClickEmoji: () => void;
}

const ChatBar: FunctionComponent<ChatBarProps> = ({ onClickEmoji, onClickMic, onClickSend, onClickAdd }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleTextChange(event.target.value);
    };

    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    const handleSend = () => {
        handleTextChange('');
        onClickSend();
    };


    return (
        <div className="w-full relative rounded-t-2xl rounded-b-none bg-primary-100 h-20 flex flex-row items-center justify-center py-2 px-2 box-border gap-2 sm:gap-4">
            <div className="flex flex-row items-center justify-center">
                <ButtonIcon variant="add" size="medium" colorClass="text-primary-900" onClick={onClickAdd} />
            </div>
            <div className="flex flex-row items-center justify-center">
                <ButtonIcon variant="smiley" size="medium" colorClass="text-primary-900" onClick={onClickEmoji} />
            </div>
            <div className="flex-1 w-full rounded-full bg-grayscale-white flex flex-row items-center justify-between py-2 px-4 sm:py-4 sm:px-6">
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder=""
                    className="flex-1 w-full bg-transparent border-none outline-none text-base font-inter text-text-black"
                />
                <ButtonIcon onClick={handleSend} size="medium" variant="send" colorClass="text-primary-500"/>
            </div>
            <ButtonIcon onClick={onClickMic} variant="mic" size="medium" colorClass="text-primary-900" />
        </div>
    );
};

export default ChatBar;
