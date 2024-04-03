import React from "react"
import { Link } from "react-router-dom"
import style from "./style.module.css"
export const MusicCard = (props) => {
    return <Link className={style.main} to={props.url}>
        <img src={props.image} />
        <span>{props.title}</span>
        <span className={style.description}>{props.description}</span>
    </Link>
}