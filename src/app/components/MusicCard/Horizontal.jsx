import React from "react"
import { Link } from "react-router-dom"
import style from "./style.module.css"
import { AudioContext } from "../../store/audioContext"
import { combineClasses } from "../../../utils/format"
export const HorizontalMusicCard = (props) => {
    const {audio, update} = React.useContext(AudioContext)
    const playMusic = ()=>{
        update(props.music, props.title, '', props)
    }
    const isplayingClass = props.title == audio.next ? style.active : ''
    return <div className={combineClasses(style.horizontal,isplayingClass)} onClick={playMusic}>
        <img src={props.image} />
        <span>{props.title}</span>
    </div>
}