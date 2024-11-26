import clsx from "clsx"
import React, { InputHTMLAttributes, ReactElement } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "outlined" | "contained",
    fullWidth?: boolean,
    startAdornment?: ReactElement
}

export default (props: TextFieldProps) => {
    const { className, startAdornment, ...otherProps } = props;

    return (
        <div className="relative">
            {
                /* Add the Start Adornment */
                (!startAdornment) ? <></> :
                    React.cloneElement(
                        startAdornment,
                        {
                            className: clsx(
                                startAdornment.props.className,
                                "size-4 absolute top-1.5 left-1.5"
                            )
                        }
                    )
            }

            <input
                {...otherProps}
                type="text"
                className={clsx(
                    /* Common Props */
                    "rounded h-7",
                    "focus:outline-none focus:ring-0",
                    
                    /* Left & Right Adornments */
                    {
                        "pl-7": startAdornment,
                        "pl-1": !startAdornment,
                        "pr-1": true
                    },

                    {
                        /* Background Color */
                        "bg-transparent": props.variant === "outlined",
                        "bg-action-active": !props.variant || props.variant === "contained"
                    },

                    /* Custom Styling */
                    className
                )}
            />
        </div>
    )
}