import React from 'react';

export interface NumberIconProps {
    number: number;
    size?: "small" | "medium" | "large";
    colorClass?: string;
}

const NumberIcon = ({ number, size = "medium", colorClass = "primary-500" }: NumberIconProps) => {
    const sizeMap = {
        small: 16,
        medium: 24,
        large: 32,
    };

    const sizeValue = sizeMap[size];
    const borderColor = `border-${colorClass}`;
    const textColor = `text-${colorClass}`;

    return (
        <div
            className={`flex items-center justify-center rounded-full border-2 ${borderColor} w-[${sizeValue}px] h-[${sizeValue}px]`}
            style={{ width: `${sizeValue}px`, height: `${sizeValue}px` }}
        >
            <span className={`${textColor} font-inter font-bold`} style={{fontSize: `${sizeValue * 0.5}px`, lineHeight: '120%', maxWidth: `${sizeValue}px`,overflow: 'hidden',}}>
                {number}
            </span>
        </div>
    );
};

export default NumberIcon;
