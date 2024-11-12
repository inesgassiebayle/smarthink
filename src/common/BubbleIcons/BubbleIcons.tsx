import React from 'react';
import Icon, {IconProps} from "../Icon/Icon";

export interface BubbleIconProps {
    /**
     * Variante del ícono a mostrar
     */
    variant: IconProps['variant'];
}

export const BubbleIcon: React.FC<BubbleIconProps> = ({
                                                          variant
                                                      }) => {
    return (
        <div className="w-12 h-12 bg-[#7FD1C8] rounded-2xl flex items-center justify-center">
            <Icon
                variant={variant}
                size="large"
                fill={false}
                colorClass="text-gray-900"
            />
        </div>
    );
};
