import React from "react";

interface CircularProgressBarProps {
    progress: number;
    size?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
                                                                     progress,
                                                                     size = 40,
                                                                 }) => {
    const strokeWidth = 4;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = ((100 - progress) / 100) * circumference;

    return (
        <svg width={size} height={size} className="transform rotate-[-90deg]">
            <circle
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                className="text-gray-200"
                fill="transparent"
                stroke="currentColor"
            />
            <circle
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                fill="transparent"
                className="text-primary-500"
                stroke="currentColor"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
                style={{
                    transition: "stroke-dashoffset 0.5s ease-in-out",
                }}
            />
        </svg>
    );
};

export default CircularProgressBar;
