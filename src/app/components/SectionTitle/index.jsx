import React from "react"
import style from './style.module.css'
import { Link } from "react-router-dom"
export const SectionTitle = ({ title, showAllLink }) => {
    return (<>
        <section className={style.section}>
            <h2 className={style.h3}>{title}</h2>
            {showAllLink && <Link to={showAllLink}>Show all</Link>}
        </section>
    </>)
}