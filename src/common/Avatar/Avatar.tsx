import React, { FunctionComponent } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
    imageSrc: string;
    size: "small" | "medium" | "large" | "xlarge";
}

const avatarVariants = cva(
    'rounded-full overflow-hidden flex items-center justify-center',
    {
        variants: {
            size: {
                small: 'w-4 h-4',
                medium: 'w-6 h-6',
                large: 'w-8 h-8',
                xlarge: 'w-10 h-10',
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    }
);

const Avatar: FunctionComponent<AvatarProps> = ({ imageSrc, size }) => {
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
