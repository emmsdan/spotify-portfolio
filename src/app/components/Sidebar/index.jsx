import React from "react"
import Logo from "../Logo/Logo"
import style from './style.module.css'
import { mainMenus, topRecommend } from "./data"
import { combineClasses } from "../../../utils/format"
import { Link } from "react-router-dom";
import { routes } from "../../routes"
import { appSettings, downloadApp } from "../../../utils/user"
import { HiOutlineArrowCircleDown } from "react-icons/hi"


export const Sidebar = () => {
  const setting = appSettings()

  return (
    <aside className={style.sidebar}>
      <Logo useWhite />
      <div className={style.menu}>
        {
          mainMenus.map((menu, index) => {
            return <>
              <MenuItem {...menu} />
              {
                (index + 1) % 3 == 0 ?
                <br />
                : <></>
              }
            </>
          })
        }
      </div>

      <div className={combineClasses(style.menu, style.divider)}>
        {
          topRecommend.map(recommendation => {
            return <Link  className={combineClasses(style.item,style.regular )} to={routes.search(recommendation)}>{recommendation}</Link>
          })
        }

        {
          !setting.hasInstalledApp && 
          <div className={style['app-install']} onClick={downloadApp}>
            <HiOutlineArrowCircleDown />
            <span>Install App</span>
          </div>
        }
      </div>
    </aside>
  )
}
export const MenuItem = (menu) => {
  const className = combineClasses(style.item, )
  return (
    <Link to={menu.url} className={className}>
      {menu.icon} <span className={style.name}>{menu.name}</span>
    </Link>
  )
}