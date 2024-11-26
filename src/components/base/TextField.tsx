import clsx from "clsx"

export interface TextFieldProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    variant?: "outlined" | "contained"
}

export default () => {
    return (
        <input 
            type="text"
            className={clsx(
                ""
            )}
        />
    )
}