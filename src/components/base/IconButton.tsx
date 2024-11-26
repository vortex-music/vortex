import clsx from 'clsx';
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

export interface IconButtonProps extends ButtonBaseProps {
    
}

export default (props: IconButtonProps) => {
    const { children, variant, className, ...otherProps } = props;
    return (
        <ButtonBase
            variant={variant ?? "text"}
            className={clsx("p-1 h-fit w-fit bg-primaryButton_background", className)}
            {...otherProps}
        >
            {children}
        </ButtonBase>
    )
}