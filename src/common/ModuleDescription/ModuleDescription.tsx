import React from 'react';

interface ModuleDescriptionProps {
    description: string;
}

const ModuleDescription: React.FC<ModuleDescriptionProps> = ({ description }) => {
    return (
        <div className="bg-white flex w-full h-[96px] py-4 px-2 border-primary-500 flex-col justify-center border rounded-3xl truncate">
            <p className="text-black font-inter">{description}</p>
        </div>
    );
};

export default ModuleDescription;
