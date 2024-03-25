import React from 'react'
export const HeaderNavigation = ()=> {
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