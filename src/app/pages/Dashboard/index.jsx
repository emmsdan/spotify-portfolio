import React from 'react'
import style from "./style.module.css"
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
export const DashboardPage = () => {

    return (
        <section className={style.container}>
            <section className={style['content-wrapper']} role='content'>
                <Sidebar />
                <main>
                    <section className={style.content}>
                        <Outlet />
                    </section>
                </main>
            </section>

            <footer className={style.footer}>footer</footer>
        </section>)
}

