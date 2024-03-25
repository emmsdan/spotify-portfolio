import React from 'react'
import { CustomButton } from "../Button"
import style from "./style.module.css"
export const DiscountFlag = () => {
    return (
        <div className={style.discount}>
            <p>Special discount for eligible students in university</p>
            <CustomButton type="outline" onClick={()=>{}} className='btn-invert'>learn more</CustomButton>
        </div>
    )
}