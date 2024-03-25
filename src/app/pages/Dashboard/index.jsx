import React from 'react'
import style from "./style.module.css"
export const DashboardPage = () => {
    return (
    <section className={style.container}>
        <section  className={style['content-wrapper']} role='content'>
            <aside>aside</aside>
            <main>main</main>
        </section>
        
        <footer className={style.footer}>footer</footer>
    </section>)
}