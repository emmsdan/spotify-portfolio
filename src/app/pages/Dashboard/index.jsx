import React from 'react'
import style from "./style.module.css"
import { Sidebar } from '../../components/Sidebar'
export const DashboardPage = () => {
    
    return (
    <section className={style.container}>
        <section  className={style['content-wrapper']} role='content'>
            <Sidebar />
            <main>main</main>
        </section>

        <footer className={style.footer}>footer</footer>
    </section>)
}

