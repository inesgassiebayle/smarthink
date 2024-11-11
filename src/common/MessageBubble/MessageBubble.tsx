import React, { FunctionComponent } from 'react';
import UnionOut from "../../assets/UnionOut.svg";
import UnionIn from "../../assets/UnionIn.svg";
import RectangleTail from "../../assets/RectangleTail.svg";

export interface MessageBubbleProps {
    variant: 'ingoing' | 'outgoing' | 'MessageCardIngoing' | 'MessageCardOutgoing';
}

const MessageBubble: FunctionComponent<MessageBubbleProps> = ({ variant }) => {
    return variant === 'outgoing' ? (
        <div
            className="w-[174px] h-[55px] relative flex flex-row text-right text-base text-grayscale-black font-inter flex-1">
            {/* Main Chat Bubble */}
            <div
                className="w-36 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-primary-100 flex flex-col text-center items-start justify-end p-3 box-border z-[1]">
                <div className="w-[132px] relative leading-[120%] inline-block">Message here</div>
                <div
                    className="w-full flex justify-start text-left text-xs text-grayscale-500">
                    <div className="relative leading-[120%]">Time</div>
                </div>
            </div>
            <div className="h-full flex-col justify-start items-end inline-flex [transform:_rotate(180deg)]">
                <img className="w-full transform -rotate-180" alt="" src={UnionOut}/>
                <img className="w-hug transform rotate-180" alt="" src={RectangleTail}/>
            </div>
        </div>
    ) : (
        variant==='ingoing' ? (
        <div
            className="w-full h-full relative flex flex-row text-right text-base text-grayscale-black font-inter flex-1">
            {/* Main Chat Bubble */}
            <div
                className="w-36 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-grayscale-300 flex flex-col text-center items-start justify-end p-3 box-border z-[1]">
                <div className="h-full flex-col justify-start items-end inline-flex ">
                    <img className="w-full transform -rotate-180" alt="" src={UnionIn}/>
                    <img className="w-hug transform rotate-180" alt="" src={RectangleTail}/>
                </div>
                <div className="w-[132px] relative leading-[120%] inline-block">Message here</div>
                <div
                    className="w-full flex justify-start text-left text-xs text-grayscale-500">
                    <div className="relative leading-[120%]">Time</div>
                </div>
            </div>

        </div>
    )
    : (
        variant==='MessageCardIngoing' ? (
        <div
            className="w-full h-full relative flex flex-row text-right text-base text-grayscale-black font-inter flex-1">
            {/* Main Chat Bubble */}
            <div
                className="w-36 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-grayscale-300 flex flex-col text-center items-start justify-end p-3 box-border z-[1]">
                <div className="h-full flex-col justify-start items-end inline-flex ">
                    <img className="w-full transform -rotate-180" alt="" src={UnionIn}/>
                    <img className="w-hug transform rotate-180" alt="" src={RectangleTail}/>
                </div>
                <div className="w-[132px] relative leading-[120%] inline-block">Message here</div>
                <div
                    className="w-full flex justify-start text-left text-xs text-grayscale-500">
                    <div className="relative leading-[120%]">Time</div>
                </div>
            </div>

        </div>
            )
            : (
                variant==='MessageCardOutgoing' ? (
        <div className={"w-full h-full relative flex flex-row text-right text-base text-grayscale-black font-inter flex-1"}>
            {/* Main Chat Bubble */}
            <div
                className="w-36 rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-primary-100 flex flex-col text-center items-start justify-end p-3 box-border z-[1]">
                <div className="w-[132px] relative leading-[120%] inline-block">Message here</div>
                <div
                    className="w-full flex justify-start text-left text-xs text-grayscale-500">
                    <div className="relative leading-[120%]">Time</div>
                </div>
            </div>
            <div className="h-full flex-col justify-start items-end inline-flex [transform:_rotate(180deg)]">
                <img className="w-full transform -rotate-180" alt="" src={UnionOut}/>
                <img className="w-hug transform rotate-180" alt="" src={RectangleTail}/>
            </div>
        </div>
                )
                : null
            )
    )
    );
};

export default MessageBubble;
