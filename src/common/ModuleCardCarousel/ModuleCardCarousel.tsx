import React, { FunctionComponent } from "react";
import ModuleCard, { ModuleCardProps } from "../ModuleCard/ModuleCard";

interface ModuleCardCarouselProps {
    modules: Omit<ModuleCardProps, "variant">[];
    onModuleClick: (id: string) => void;
}

const ModuleCardCarousel: FunctionComponent<ModuleCardCarouselProps> = ({ modules,  onModuleClick }) => {
    return (
        <div className="module-card-carousel w-full overflow-auto gap-[16px] p-4 !important">
                <div
                    className="flex flex-col overflow-y-auto gap-4 p-4 w-full
                    [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden !important"
                >
                    {modules.map((module) => (
                        <div key={module.id} className="p-4">
                            <ModuleCard
                                key={module.id}
                                variant="circularProgress"
                                {...module}
                                onClick={() => onModuleClick(module.id)}
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default ModuleCardCarousel;
