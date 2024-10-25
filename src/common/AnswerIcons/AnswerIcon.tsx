import React, {useState} from 'react';
import Icon from "../Icon/Icon";


interface AnswerIconProps {
    shape: 'circle' | 'square';
    state: 'incorrect' | "correct" | "default";
    filled: boolean;
}

const AnswerIcon: React.FC<AnswerIconProps> = ({ state, shape, filled }) => {


    const getIconVariant = () => {
        if (state === 'incorrect') {
            return shape === 'circle'
                ? (filled ? 'incorrect_circle' : 'empty')
                : (filled ? 'incorrect_square' : 'empty');
        } else if (state === 'correct') {
            return shape === 'circle'
                ? (filled? 'correct_circle' : 'correct_circle')
                : (filled? 'correct_square' : 'correct_square');
        } else if (state === 'default') {
            return shape === 'circle'
                ?(filled? 'circle' : 'circle')
                :(filled? 'square' : 'square');
        }
        return 'empty';
    };


    return (
            <Icon variant={getIconVariant()} fill={filled} />
    );
};

export default AnswerIcon;
