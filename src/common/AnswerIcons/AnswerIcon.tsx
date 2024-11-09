import React, {useEffect, useState} from 'react';
import Icon from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";


interface AnswerIconProps {
    shape: 'circle' | 'square';
    state: 'incorrect' | "correct" | "default";
    filled: boolean;
    color?: string;
    clickable?: boolean;

}

const AnswerIcon: React.FC<AnswerIconProps> = ({ state, shape, filled, color, clickable = true }) => {
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
                ? (isFilled? 'correct_circle' : 'correct_circle')
                : (isFilled? 'correct_square' : 'correct_square');
        } else if (state === 'default') {
            return shape === 'circle'
                ?(isFilled? 'circle' : 'circle')
                :(isFilled? 'square' : 'square');
        }
        return 'empty';
    };

    const handleClick = () => {
        if (state === 'default' && clickable) {
            setIsFilled(prev => !prev);
        }
    }


    return (
            <ButtonIcon variant={getIconVariant()} filled={isFilled} colorClass={color} onClick={handleClick} size={"medium"} />
    );
};

export default AnswerIcon;
