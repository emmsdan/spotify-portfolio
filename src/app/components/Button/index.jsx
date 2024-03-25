import React from "react"
import { combineClasses } from "../../../utils/format"
import style from "./style.module.css"
export const CustomButton = ({children, ...props}) => {
    const classNames = {
        primary: 'btn',
        outline: 'btn-outline',
        secondary: 'btn-secondary'
    }
    const className = classNames[props.type] || classNames.primary
    const classes = combineClasses(className, style.button, props.className)
    return (
        props.onClick ? 
        <button {...props} onClick={props.onClick} className={classes}>
            {children}
        </button> 
            : 
        <a href="#" className={classes}>{children}</a>
    )
}