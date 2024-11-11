import React, { FunctionComponent } from 'react';

export interface HyperLinkToPageProps {
    subject: string;
    link: string;
}

const HyperLinkToPage: FunctionComponent<HyperLinkToPageProps> = ({ subject, link }) => {
    return (
        <div className="w-full relative flex flex-col items-start text-left text-xs text-black font-inter-body-xsmall-regular">
            <span className="self-stretch relative leading-[120%] break-words overflow-hidden text-ellipsis">
                {subject}
            </span>
            <i className="self-stretch relative text-3xs underline leading-[120%] text-avatars-blue truncate max-w-full">
                {link}
            </i>
        </div>
    );
};

export default HyperLinkToPage;
