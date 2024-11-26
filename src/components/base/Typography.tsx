import clsx from "clsx";

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {

}

export default (props: TypographyProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <span
            {...otherProps}
            className={clsx("text-text-primary leading-tight", className)}
        >
            {children}
        </span>
    )
}