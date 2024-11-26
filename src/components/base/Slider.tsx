import clsx from "clsx";

export interface SliderProps extends React.HTMLAttributes<HTMLInputElement> {

}

export default (props: SliderProps) => {
    const { className, ...otherProps } = props;
    
    return (
        <input
            {...otherProps}
            type="range"
            className={
                clsx(className)
            }
        />
    )
}