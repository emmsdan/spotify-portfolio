import { CustomButton } from "../Button"
import style from './style.module.css'

export const PricingCardItem = (props) => {
    return (
        <div className={style.card}>
            <div className={style.header}>
                {props.free && <span className={style.free}>{props.free} month free</span>}
                <br />
                <span className={style['one-time']}>One-time plans available</span>
                <h4 className={style.planName}>{props.planName}</h4>
                <p>{props.price}/month after offer period</p>
                <p>{props.numberAccount} account</p>
            </div>
            <div className={style.content}>
                <ul>
                    <li>
                        <p>Ad-free music listening</p>
                    </li>
                    <li>
                        <p>Group Session</p>
                    </li>
                    <li>
                        <p>Download 10k songs/device on 5 devices</p>
                    </li>
                </ul>

                <br />
                <p>
                    <CustomButton className={style.button} onClick={()=>{}}>View plans</CustomButton>
                </p>
            </div>

            <div className={style.footer}>
                <a href="#">Terms and conditions apply.</a>
                1 month free not available for users who have already tried Premium.</div>
        </div>
    )
}