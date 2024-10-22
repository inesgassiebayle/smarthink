import { useState, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { ClearOutlined, SearchOutlined } from "@mui/icons-material";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariant> {}

const inputVariant = cva(
    ["rounded-3xl", "px-4", "py-2", "h-10", "w-60", "border", "focus:outline-none"],
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
    const [value, setValue] = useState<string>(props.value as string || "");
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
        <div className="relative inline-flex items-center w-full">
            <input
                className={inputVariant({ state })}
                value={value}
                onChange={handleInputChange}
                disabled={disabled}
                {...props}
            />
            <div className="absolute right-3 cursor-pointer">
                {disabled || state === "default" ? (
                    <SearchOutlined className="text-grayscale-500" />
                ) : (
                    <ClearOutlined className="text-primary-500" onClick={handleClear} />
                )}
            </div>
        </div>
    );
}
