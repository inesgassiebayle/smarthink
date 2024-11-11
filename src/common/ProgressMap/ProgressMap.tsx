import React, { FunctionComponent } from "react";
import ProgressMapModule, { ProgressMapModuleProps } from "../ProgressMapModule/ProgressMapModule";

export interface ProgressMapProps {
    modules: (Omit<ProgressMapModuleProps, "variant" | "state"> & { id: string })[]; // Properly define `modules` with `id`
    moduleReached: number;
    moduleState: "in-progress" | "default" | "completed";
    onModuleClick: (id: string) => void;
}

const ProgressMap: FunctionComponent<ProgressMapProps> = ({ modules, onModuleClick, moduleState, moduleReached }) => {
    return (
        <div className="flex flex-col w-full h-full overflow-y-auto pb-2">
            {modules.map((module, index) => {
                let variant: ProgressMapModuleProps["variant"];

                if (index < moduleReached) {
                    variant = "completed";
                } else if (index === moduleReached) {
                    variant = moduleState;
                } else {
                    variant = "default";
                }

                return (
                    <ProgressMapModule
                        key={module.id}
                        {...module}
                        variant={variant}
                        state={index === modules.length - 1 ? "end" : "middle"}
                        onClick={() => onModuleClick(module.id)}
                    />
                );
            })}
        </div>
    );
};

export default ProgressMap;
