import React, { useEffect, useState } from 'react';
import ButtonIcon from "../ButtonIcon/ButtonIcon";

interface AnswerIconProps {
    shape: 'circle' | 'square';
    state: 'incorrect' | 'correct' | 'default';
    filled: boolean;
    color?: string;
    clickable?: boolean;
}

const AnswerIcon: React.FC<AnswerIconProps> = ({ state, shape, filled, clickable = true }) => {
    const [isFilled, setIsFilled] = useState(filled);

    useEffect(() => {
        setIsFilled(filled);
    }, [filled]);

    const getIconVariant = () => {
        if (state === 'incorrect') {
            return shape === 'circle'
                ? (isFilled ? 'incorrect_circle' : 'empty')
                : (isFilled ? 'incorrect_square' : 'empty');
        } else if (state === 'correct') {
            return shape === 'circle'
                ? (isFilled ? 'correct_circle' : 'correct_circle')
                : (isFilled ? 'correct_square' : 'correct_square');
        } else {
            return shape === 'circle' ? (isFilled ? 'circle' : 'circle') : (isFilled ? 'square' : 'square');
        }
    };

    const handleClick = () => {
        if (state === 'default' && clickable) {
            setIsFilled(prev => !prev);
        }
    };

    const getColorClass = () => {
        if (state === 'incorrect') {
            return 'text-state-error';
        } else if (state === 'correct') {
            return 'text-state-succes';
        } else {
            return 'text-primary-500';
        }
    };

    return (
        <ButtonIcon
            variant={getIconVariant()}
            filled={isFilled}
            colorClass={getColorClass()}
            onClick={handleClick}
            size="medium"
        />
    );
};

export default AnswerIcon;
