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
                "bg-bg-default",
                "hover:bg-action-hover",
                "active:bg-action-active",
                "text-text-primary",
                "font-semibold",
                "rounded",
                className,

                /* Variants! */
                {
                    "border border-border-default shadow": !props.variant || props.variant === "outlined",
                    "": props.variant === "text" /* No Borders */
                }
            )}
        >
            {children}
        </button>
    )
}