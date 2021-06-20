import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../actions/index';
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function Landing() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())    
    }, [] )


    return (
        <div>
            <div className={style.mainBox}>
                <div className={style.maintitleBox}>
                    <h1 className={style.mainTitle}>EPLORE THE WORLD THROUGH ADVENTURES</h1>
                </div>

                <div className={style.buttoncontainer}>
                    <Link to={"/home"}>
                        <button className={style.imagButton}>START EXPLORING</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

