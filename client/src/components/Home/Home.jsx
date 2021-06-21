import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../actions/index';
import CountryList from '../CountryList/CountryList'
import BotonesyFiltrados from '../BotonesyFiltrados/BotonesyFiltrados'
import SearchBar from '../SearchBar/SearchBar'
import style from './Home.module.css'

export default function Home() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.listOfCountries)

    useEffect(() => {
        dispatch(getAllCountries())    
    }, [] )

   
    return (
        <div>
            <div className={style.mainHomeContainer}>
                    
                    <div className={style.optionsContainer}>
                        <div className={style.listTitleContainer}>
                            <h1>WHAT COUNTRY<br/>WILL YOU VISIT NEXT?</h1>
                            <p>Explore countries and their activities and decide<br/>wich will be your next destination.</p>
                        </div>
                    
                        <div>
                            <SearchBar/>
                        </div>

                        <div>
                            <BotonesyFiltrados/>
                        </div>

                    </div>
                    
                    
                    <div className={style.listHomeContainer}>
                        <CountryList/>
                    </div>

            </div>          
        </div>
    )
}


