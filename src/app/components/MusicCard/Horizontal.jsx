import React from "react"
import { Link } from "react-router-dom"
import style from "./style.module.css"
export const HorizontalMusicCard = (props) => {
    return <Link className={style.horizontal} to={props.url}>
        <img src={props.image} />
        <span>{props.title}</span>
    </Link>
}