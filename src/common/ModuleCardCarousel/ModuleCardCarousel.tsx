import React, { FunctionComponent } from "react";
import ModuleCard, { ModuleCardProps } from "../ModuleCard/ModuleCard";

interface ModuleCardCarouselProps {
    modules: Omit<ModuleCardProps, "variant">[];
    onModuleClick: (id: string) => void;
}

const ModuleCardCarousel: FunctionComponent<ModuleCardCarouselProps> = ({ modules,  onModuleClick }) => {
    return (
        <div className="module-card-carousel w-full overflow-auto">
                <div
                    className="flex flex-col overflow-y-auto gap-2 w-full
                    [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
                >
                    {modules.map((module) => (
                        <ModuleCard
                            key={module.id}
                            variant="circularProgress"
                            {...module}
                            onClick={() => onModuleClick(module.id)}
                        />
                    ))}
                </div>
        </div>
    );
};

export default ModuleCardCarousel;
