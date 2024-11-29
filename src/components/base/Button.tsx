import clsx from 'clsx';
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

export interface ButtonProps extends ButtonBaseProps {

}

export default (props: ButtonProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <ButtonBase
            {...otherProps}
            className={clsx(
                /* Button Sizes */
                {
                    "pl-2 pr-2": props.size === "small",
                    "pt-1 pb-1 pl-4 pr-4": !props.size || props.size === "medium",
                    "pt-2 pb-2 pl-4 pr-4 ": props.size === "large",
                },

                /* Override Using Customization */
                className
            )}
        >
            {children}
        </ButtonBase>)
}