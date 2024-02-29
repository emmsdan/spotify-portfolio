import SpotifyWhite from '../../assets/images/spotify-white.png'
import SpotifyBlack from '../../assets/images/spotify-black.png'
import {ReactComponent} from '../../assets/images/spotify-black.svg'

export function Logo(props) {
    if (props.useWhite) {
        return (
            <a href='#/dashboard'>
                <ReactComponent />
            </a>
        )
    } else {
        return (
            <a href='#/dashboard'>
                <img src={SpotifyBlack} />
            </a>
        )
    }
}

export function NavigationLogoText() {
    return (<h1>Spotify</h1>)
}