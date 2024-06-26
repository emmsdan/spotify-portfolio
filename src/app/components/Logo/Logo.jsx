import React from 'react'
import SpotifyBlack from '../../assets/images/spotify-black.png'
import SpotifyWhite from '../../assets/images/spotify-black.svg'
import style from "./style.module.css"
import { routes } from '../../routes'

export function Logo(props) {
    const myImage = props.useWhite ? SpotifyWhite : SpotifyBlack
    return (
        <a href={routes.dashboard()} className={style.logo}>
            <img src={myImage} />
        </a>
    )
}

export function NavigationLogoText() {
    return (<h1>Spotify</h1>)
}

export default Logo




