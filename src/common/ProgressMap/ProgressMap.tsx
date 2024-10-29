import React, { FunctionComponent } from "react";
import ProgressMapModule, { ProgressMapModuleProps } from "../ProgressMapModule/ProgressMapModule";

export interface ProgressMapProps {
    modules: Omit<Omit<ProgressMapModuleProps, "variant">, "state">[];
    moduleReached: number;
    moduleState: "in-progress" | "default" | "completed";
}

const ProgressMap: FunctionComponent<ProgressMapProps> = ({ modules, moduleState, moduleReached }) => {
    return (
        <div className="flex flex-col w-full h-full overflow-y-auto">
            {modules.map((module, index) => {
                let variant: ProgressMapModuleProps["variant"];

                if (index < moduleReached) {
                    variant = "completed";
                } else if (index === moduleReached) {
                    variant = moduleState;
                } else {
                    variant = "default";
                }
                {/* TODO hide the scrollbar for mobile */}

                return (
                    <ProgressMapModule
                        key={index}
                        {...module}
                        variant={variant}
                        state = {index === modules.length - 1 ? "end" : "middle"}
                    />
                );
            })}
        </div>
    );
};

export default ProgressMap;
