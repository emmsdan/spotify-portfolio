import React from 'react'
import style from "./style.module.css"
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { DashboardFooter } from '../../components/Footer/DashboardFooter'
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

                <DashboardFooter className={style.footer} />
            
        </section>)
}

