import React, { useState, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Icon from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariant> {}

const inputVariant = cva(
    [
        "flex",
        "p-[var(--Space-200,8px)]",
        "items-center",
        "gap-[var(--Space-200,8px)]",
        "rounded-[24px]",
        "border-[0.8px]",
        "w-full",
    ],
    {
        variants: {
            state: {
                default: [
                    "bg-grayscale-white",
                    "border-grayscale-500",
                    "placeholder:text-grayscale-500",
                ],
                active: [
                    "bg-grayscale-white",
                    "border-primary-500",
                    "placeholder:text-primary-500",
                    "border-[1.5px]",
                    "border-solid",
                    "box-border",
                    "text-grayscale-black",
                ],
                disabled: [
                    "bg-grayscale-white",
                    "border-primary-100",
                    "placeholder:text-primary-100",
                    "text-primary-100", // Aseguramos que el texto en "disabled" sea de color primary-100
                    "cursor-not-allowed",
                ],
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export default function SearchBar({ state: initialState = "default", value = "", ...props }: InputProps) {
    const [valueLocal, setValueLocal] = useState(value);
    const [state, setState] = useState(initialState);

    useEffect(() => {
        // Solo actualiza el estado cuando el prop `state` cambie
        setState(initialState);
    }, [initialState]);

    useEffect(() => {
        if (initialState === "disabled") {
            setState("disabled");
        } else if (valueLocal !== "") {
            setState("active");
        } else {
            setState("default");
        }
    }, [valueLocal]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (state === "disabled") return;
        setValueLocal(e.target.value);
    };

    const handleClear = () => {
        setValueLocal("");
    };

    return (
        <div className={`${inputVariant({ state })} flex items-center relative w-full`}>
            <div className="flex-1 relative leading-[120%] overflow-hidden text-ellipsis whitespace-nowrap">
                <input
                    value={valueLocal}
                    onChange={handleInputChange}
                    disabled={state === "disabled"}
                    className="flex-grow border-none focus:outline-none px-2 text-primary-500"
                    {...props}
                />
            </div>
            <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                {state === "disabled" ? (
                    <Icon variant="search" size="medium" colorClass="text-primary-100" />
                ) : state === "default" ? (
                    <Icon variant="search" size="medium" colorClass="text-grayscale-500" />
                ) : (
                    <ButtonIcon onClick={handleClear} size="medium" variant="close" colorClass="text-primary-500" />
                )}
            </div>
        </div>
    );
}
