import React from 'react';
import Icon, {IconProps} from "../Icon/Icon";

export interface BubbleIconProps {

    variant: IconProps['variant'];
}

export const BubbleIcon: React.FC<BubbleIconProps> = ({
                                                          variant
                                                      }) => {
    return (
        <div className="w-12 h-12 bg-primary-200 rounded-2xl flex items-center justify-center">
            <Icon
                variant={variant}
                size="large"
                fill={false}
                colorClass="text-white"
            />
        </div>
    );
};
