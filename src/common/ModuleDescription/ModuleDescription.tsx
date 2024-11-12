import React from 'react';

interface ModuleDescriptionProps {
    description: string;
}

const ModuleDescription: React.FC<ModuleDescriptionProps> = ({ description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 min-h-[64px] border-[4px] border-primary-500">
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ModuleDescription;