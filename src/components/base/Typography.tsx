import clsx from "clsx";

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {

}

export default (props: TypographyProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <p
            {...otherProps}
            className={clsx("text-text-primary leading-tight", className)}
        >
            {children}
        </p>
    )
}