
export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        outline: 'btn-outline',
        secondary: 'btn-secondary'
    }
    const className = classNames[props.type] || classNames.primary
    return (
        props.onClick ? 
        <button onClick={props.onClick} className={className}>
            {props.children}
        </button> 
            : 
        <a href="#" className={className}>{props.children}</a>
    )
}