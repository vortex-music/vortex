import clsx from "clsx";
import '../../styles/slider.css'
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface SliderProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    
}

export default (props: SliderProps) => {
    const { className, ...otherProps } = props;
    
    return (
        <input
            {...otherProps}
            type="range"
            className={
                clsx(
                    "slider-nothumb",
                    "hover:cursor-pointer",
                    "h-1.5 bg-action-active rounded-lg overflow-hidden appearance-none",
                    className
                )
            }
        />
    )
}