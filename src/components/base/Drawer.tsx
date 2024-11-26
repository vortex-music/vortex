export interface DrawerProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {

}

export default (props: DrawerProps) => {
    const { children, ...otherProps } = props;

    return (
        <aside
            {...otherProps}
            className="z-40 w-64 h-full bg-white border-r border-gray-200"
            aria-label="Sidebar"
        >
            {children}
        </aside>
    )
}