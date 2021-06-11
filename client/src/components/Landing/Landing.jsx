import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function Landing() {
    return (
        <div>
            <div className={style.mainBox}>
                <h1 className={style.mainTitle}>EPLORE THE WORLD THROUGH ADVENTURES</h1>
                <Link to={"/home"}>
                    <button className={style.imagButton}>ENTER</button>
                </Link>
            </div>
            
        </div>
    )
}

