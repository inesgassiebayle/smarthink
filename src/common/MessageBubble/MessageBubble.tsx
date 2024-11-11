import React, { FunctionComponent } from 'react';
import UnionOut from "../../assets/UnionOut.svg";
import UnionIn from "../../assets/UnionIn.svg";

export interface MessageBubbleProps {
    variant: 'ingoing' | 'outgoing';
    isLastMessage?: boolean;
    text: string;
    time: string;
}

const MessageBubble: FunctionComponent<MessageBubbleProps> = ({ variant, isLastMessage = true, text, time }) => {
    const isOutgoing = variant === 'outgoing';
    const bgColor = isOutgoing ? 'bg-primary-100' : 'bg-gray-300';
    const tailImage = isOutgoing ? UnionOut : UnionIn;

    return (
        <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} w-full`}>
            <div className="relative flex items-end max-w-[70%]">
                {/* Main Chat Bubble */}
                <div
                    className={`chat-bubble ${bgColor} p-4 rounded-xl max-w-full`}
                    style={{ position: 'relative' }}
                >
                    <div className="text-sm mb-1">{text}</div>
                    <div className="text-xs text-gray-500">{time}</div>
                </div>

                {isLastMessage && (
                    <div
                        className={`absolute bottom-0 ${isOutgoing ? 'right-[-8px]' : 'left-[-8px]'}`}
                        style={{
                            width: '20px',
                            height: '16px',
                        }}
                    >
                        <img
                            src={tailImage}
                            alt="tail"
                            className="w-full h-full"
                            style={{
                                filter: !isOutgoing ? 'brightness(0) saturate(100%) invert(93%) sepia(9%) saturate(25%) hue-rotate(168deg) brightness(94%) contrast(86%)' : 'none'
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;
