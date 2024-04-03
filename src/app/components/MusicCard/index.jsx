import React from "react"
import { Link } from "react-router-dom"
import style from "./style.module.css"
import { combineClasses } from "../../../utils/format"
import { AudioContext } from "../../store/audioContext"
export const MusicCard = (props) => {
    const {audio, update} = React.useContext(AudioContext)
    const playMusic = ()=>{
        update(props.music, props.title)
    }
    const isplayingClass = props.title == audio.next ? style.active : ''
    return <div className={combineClasses(style.main, isplayingClass)}  onClick={playMusic}>
        <img src={props.image} />
        <span>{props.title}</span>
        <span className={style.description}>{props.description}</span>
    </div>
}