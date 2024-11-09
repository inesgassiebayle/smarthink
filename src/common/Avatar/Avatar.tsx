import React, { FunctionComponent } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
    imageSrc: string;
    size?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
}

const avatarVariants = cva(
    'rounded-full overflow-hidden flex items-center justify-center',
    {
        variants: {
            size: {
                xxsmall: 'w-4 h-4',
                xsmall: 'w-6 h-6',
                small: 'w-8 h-8',
                medium: 'w-10 h-10',
                large: 'w-14 h-14',
                xlarge: 'w-20 h-20',
                xxlarge: 'w-64 h-64',
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    }
);

const Avatar: FunctionComponent<AvatarProps> = ({ imageSrc, size = 'medium' }) => {
    return (
        <div className={avatarVariants({ size })}>
            <img
                src={imageSrc}
                alt="Avatar"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default Avatar;
