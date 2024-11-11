import React from 'react';
import { FunctionComponent } from 'react';

const HyperLinkToPage:FunctionComponent = () => {
    return (
        <div className="w-full relative h-[26px] flex flex-col items-center justify-between text-left text-xs text-black font-inter-body-xsmall-regular">
            <div className="self-stretch relative leading-[120%]">Finance 101</div>
            <i className="self-stretch relative text-3xs [text-decoration:underline] leading-[120%] text-avatars-blue">Economicsforeveryone.com</i>
        </div>);
};

export default HyperLinkToPage;
