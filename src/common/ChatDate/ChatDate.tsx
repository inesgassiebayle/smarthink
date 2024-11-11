import { FunctionComponent } from 'react';

export interface ChatDateProps {
    title: string;
}

const ChatDate: FunctionComponent<ChatDateProps> = ({ title }) => {
    return (
        <div className="w-full relative bg-white border-gray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-center p-2.5 text-center text-sm text-gray-500 font-m3-body-medium">
            <div className="relative tracking-[0.25px] leading-[20px] truncate max-w-full">
                {title}
            </div>
        </div>
    );
};

export default ChatDate;
