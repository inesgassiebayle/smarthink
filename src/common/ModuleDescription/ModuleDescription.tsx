import React from 'react';

interface ModuleDescriptionProps {
    description: string;
}

const ModuleDescription: React.FC<ModuleDescriptionProps> = ({ description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 min-h-[65px] border-[3px] border-primary-500">
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ModuleDescription;