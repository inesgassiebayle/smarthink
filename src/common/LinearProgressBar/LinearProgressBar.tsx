import React from "react";

interface LinearProgressBarProps {
    progress: number;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded h-2.5 overflow-hidden">
            <div
                className={`h-full ${progress === 100 ? "bg-primary-500" : "bg-primary-300"}`}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default LinearProgressBar;
