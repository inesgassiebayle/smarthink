import { FunctionComponent } from 'react';



const ChatDate:FunctionComponent = () => {
    return (
        <div className="w-full relative bg-white border-gray-100 border-b-[1px] border-solid box-border flex flex-row items-center justify-center p-2.5 text-center text-sm text-gray-200 font-m3-body-medium">
            <div className="relative tracking-[0.25px] leading-[20px]">Yesterday</div>
        </div>);
};

export default ChatDate;
