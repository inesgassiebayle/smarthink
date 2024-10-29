import React from "react";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

interface ProgressBarProps {
    progress: number; // 0 to 100
    variant: "linear" | "circle";
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, variant }) => {
    return variant === "linear" ? (
        <LinearProgressBar progress={progress} />
    ) : (
        <CircularProgressBar progress={progress} />
    );
};

export default ProgressBar;
