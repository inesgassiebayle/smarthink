import { useState, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { ClearOutlined, SearchOutlined } from "@mui/icons-material";
import Icon from "../Icon/Icon";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariant> {}

const inputVariant = cva(
    [
        "flex",
        "p-[var(--Space-200,8px)]",
        "items-center",
        "gap-[var(--Space-200,8px)]",
        "rounded-[24px]",
        "border-[0.8px]",
    ],
    {
        variants: {
            state: {
                default: ["bg-grayscale-white", "border-grayscale-500", "placeholder:text-grayscale-500"],
                active: ["bg-grayscale-white", "border-primary-500", "placeholder:text-primary-500"],
                disabled: ["bg-grayscale-white", "border-primary-100", "placeholder:text-primary-100", "text-primary-100", "cursor-not-allowed"]
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export default function SearchBar({ state: initialState, disabled, ...props }: InputProps) {
    const [value, setValue] = useState("");
    const [state, setState] = useState(initialState);

    useEffect(() => {
        if (disabled) {
            setState("disabled");
        } else if (value.length > 0) {
            setState("active");
        } else {
            setState("default");
        }
    }, [disabled, value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (!disabled) {
            setState(newValue.length > 0 ? "active" : "default");
        }
    };

    const handleClear = () => {
        setValue("");
        if (!disabled) {
            setState("default");
        }
    };

    return (
        <div className={`${inputVariant({ state })} flex items-center`}>
            // TODO FIX THE WRITING
            <input
                value={value}
                onChange={handleInputChange}
                disabled={disabled}
                className="flex-grow bg-transparent border-none focus:outline-none px-2"
                {...props}
            />
            <div className="cursor-pointer">
                {disabled || state === "default" ? (
                    <Icon
                        variant={"search"}
                        size="medium"
                        fill={false}
                        colorClass={"text-grayscale-500"}
                    />
                ) : (
                    <Icon
                        variant={"close"}
                        size="medium"
                        fill={false}
                    />
                )}
            </div>
        </div>
    );
}
