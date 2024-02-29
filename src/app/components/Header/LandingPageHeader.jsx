import './LandingPageHeader.css'
import {Logo} from './Logo'

export const LandingPageHeader = () => {
    return (<header className="header">
        <div className="logo">
            <Logo useWhite={true} />
        </div>
        <div className="menu">
            <HeaderNavigation />
        </div>
    </header>)
}

const HeaderNavigation = ()=> {
    return (<ul>
        <li>
            <a href="#/Premium">Premium</a>
        </li>
        <li><a href="#/Support">Support</a></li>
        <li><a href="#/Download">Download</a></li>
        <li>|</li>
        <li className='active'><a href="#/Sign up">Sign up</a></li>
        <li className='active'><a href="#/Log in">Log in</a></li>
    </ul>)
}