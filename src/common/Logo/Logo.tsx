import React, { FunctionComponent } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import logoImage from '../../assets/smartthinkLogo.jpg';

export interface LogoProps extends VariantProps<typeof logoVariants> {
    size: "small" | "medium" | "large";
}

const logoVariants = cva(
    'flex items-center justify-center bg-gray-200',
    {
        variants: {
            size: {
                small: 'w-16 h-16',
                medium: 'w-32 h-32',
                large: 'w-48 h-48',
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    }
);

const Logo: FunctionComponent<LogoProps> = ({ size }) => {
    return (
        <div
            className={`${logoVariants({ size })} p-2`}
            style={{
                backgroundImage: `url(${logoImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'white',
            }}
        />
    );
};

export default Logo;
