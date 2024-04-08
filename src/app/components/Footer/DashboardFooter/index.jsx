import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { AudioContext } from '../../../store/audioContext';
import { AudioInformation } from '../../MusicCard/AudioInformation';
import footerStyle from "../style.module.css"
import "./style.css"
import { combineClasses } from '../../../../utils/format';
export const DashboardFooter = (props) => {
    const { audio } = React.useContext(AudioContext)
    return (audio.playing && <footer className={combineClasses(props.className, footerStyle.footer)}>
        <AudioInformation {...audio?.current} />
        <div className={'player'}>
            <AudioPlayer
            autoPlay
            src={audio.playing}
            onPlay={e => console.log("onPlay")}
        />
        </div>
    </footer>)
}