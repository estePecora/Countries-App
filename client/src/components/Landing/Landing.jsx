import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getCountryPages } from '../../actions/index';
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function Landing() {
    const currentPage = useSelector(state => state.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())    
    }, [] )

    function listCountries () {
        dispatch(getCountryPages(currentPage))
    }

    return (
        <div>
            <div className={style.mainBox}>
                <div className={style.maintitleBox}>
                    <h1 className={style.mainTitle}>EPLORE THE WORLD THROUGH ADVENTURES</h1>
                </div>

                <div className={style.buttoncontainer}>
                    <Link to={"/home"}>
                        <button onClick={listCountries} className={style.imagButton}>START EXPLORING</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

