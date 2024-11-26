import clsx from 'clsx';
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

export interface IconButtonProps extends ButtonBaseProps {
    
}

export default (props: IconButtonProps) => {
    const { children, variant, ...otherProps } = props;
    return (
        <ButtonBase
            {...otherProps}
            variant={variant ?? "text"}
            className={clsx("p-1 h-fit w-fit")}
        >
            {children}
        </ButtonBase>
    )
}