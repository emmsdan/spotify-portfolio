import React from "react"
import { routes } from "../../routes";
import { HiSearch,  } from "react-icons/hi";
import { ReactComponent as HiLibrary} from "../../assets/icons/library.svg"
import { ReactComponent as HiHome} from "../../assets/icons/home.svg"
import { ReactComponent as Playlist} from "../../assets/icons/plus.svg"
import { ReactComponent as Liked} from "../../assets/icons/heart.svg"
import { ReactComponent as Episodes} from "../../assets/icons/success-tag.svg"

export const mainMenus = [
    { name: "Home", url: routes.dashboard(), icon: <HiHome /> },
    { name: "Search", url: routes.dashboard(), icon: <HiSearch /> },
    { name: "Your Library", url: routes.dashboard(), icon: <HiLibrary /> },
    { name: "Create Playlist", url: routes.playlist(), icon: <Playlist /> },
    { name: "Liked Songs", url: routes.dashboard(), icon: <Liked /> },
    { name: "Your Episodes", url: routes.dashboard(), icon: <Episodes /> },
]

export const topRecommend = ['Jazz', 'Hangover Cure', 'Your Top Songs 2022', 'Indie', 'Rock', 'RADAR']