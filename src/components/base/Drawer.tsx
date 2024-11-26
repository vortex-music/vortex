export interface DrawerProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {

}

export default (props: DrawerProps) => {
    const { children, ...otherProps } = props;

    return (
        <aside
            {...otherProps}
            className="z-40 w-64 p-2 h-full bg-bg-secondary border-r"
            aria-label="Sidebar"
        >
            {children}
        </aside>
    )
}