import clsx from 'clsx';
import React from 'react';

export interface ButtonBaseProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    size?: "small" | "medium" | "large",
    variant?: "outlined" | "text" /* Future: Add Contained? */
}

export default (props: ButtonBaseProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <button
            {...otherProps}
            className={clsx(
                "bg-primaryButton_background",
                "hover:bg-primaryHover_background",
                "active:bg-primaryActive_background",
                "text-gray-800",
                "font-semibold",
                "rounded",
                className,

                /* Variants! */
                {
                    "border border-gray-300 shadow": !props.variant || props.variant === "outlined",
                    "": props.variant === "text" /* No Borders */
                }
            )}
        >
            {children}
        </button>
    )
}