import React from "react"
import style from "./style.module.css"
export const AudioInformation = (props) => {
    return <div className={style.audio}>
    <img src={props.image} />
    <div>
        <div>{props.title}</div>
        <p>{props.description}</p>
    </div>
    </div>
}