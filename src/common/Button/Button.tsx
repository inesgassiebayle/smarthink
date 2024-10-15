import {FunctionComponent, ReactNode} from "react";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'filled';
    text: string;
    callback: () => void;
    icon?: FunctionComponent<any>;
    disabled: boolean;
    children: ReactNode;
}

export default function Button ({
                                    size = 'medium',
                                    variant = 'filled',
                                    text,
                                    callback: onClick,
                                    icon: Icon,
                                    disabled,
                                    children
                                }: ButtonProps) {
    return (
        <button
            className={`p-4 ${variant === 'outlined' ? 'border border-red-500' : 'bg-red-500'} ${size}`}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <Icon />}
            {text}
            {children}
        </button>
    );
}
