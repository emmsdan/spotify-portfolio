import { DiscountFlag } from './DiscountFlag'
import { PricingCardItem } from './PricingCard'
import {paymentMethods, pricingList}from './data'
import style from './style.module.css'
export const PricingSection = () => {

    const renderPaymentMethod = (method) =>{
        if (method.icon) return <img src={method.icon} />
        return null
    }
    return (<section className={style.section}>
        <h1 className={style.title}>Pick your Premium</h1>
        <p className={style.description}>Listen without limits on your phone, speaker, and other devices.</p>
        <div className={style.flex}>
            {
                paymentMethods.map(renderPaymentMethod)
            }
        </div>
        <br />
        <br />
        
        <div className={style.flex}>
            {
                pricingList.map((plans)=>{
                    return <PricingCardItem {...plans} />
                })
            }
        </div>
        <br />
        <br />
        <DiscountFlag />
        
        <br />
        <br />
    </section>)
}