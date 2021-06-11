import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css'


export default function NavBar() {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.navtitle}>
                    <NavLink exact to="/" ><h1>THE EXPLORER LOGO</h1></NavLink>
                </div>
                
                    <ul className={style.list}>
                        <li className={style.listitem}>
                            <NavLink exact to="/home" >HOME</NavLink>
                            <NavLink to="/countriesid" >COUNTRIES BY ID</NavLink>
                            <NavLink to="/addactivities" >ADD ACTIVITIES</NavLink>
                            {/* <NavLink to="/activities" >SEARCH ACTIVITIES</NavLink> */}
                        </li>
                    </ul>
            </nav>
        </div>
    )
}