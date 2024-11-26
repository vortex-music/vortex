export interface DrawerProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {

}

export default (props: DrawerProps) => {
    const { children, ...otherProps } = props;

    return (
        <aside
            {...otherProps}
            className="z-40 w-64 h-full bg-secondary_background border-r border-primary_border"
            aria-label="Sidebar"
        >
            {children}
        </aside>
    )
}