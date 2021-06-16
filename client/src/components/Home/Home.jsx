import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getCountryPages } from '../../actions/index';
import CountryList from '../CountryList/CountryList'
import BotonesNextPrev from '../BotonesNextPrev/BotonesNextPrev'
import SearchBar from '../SearchBar/SearchBar'
import Filters from '../Filters/Filters'
import style from './Home.module.css'

export default function Home() {
    // const dispatch = useDispatch()
    const countries = useSelector(state => state.listOfCountries)
    const currentPage = useSelector(state => state.currentPage)
    
    // useEffect(() => {
    //     dispatch(getCountryPages(currentPage))    
    // }, [dispatch] )


    return (
        <div>
        
            <div className={style.mainHomeContainer}>
                
                <div className={style.optionsContainer}>
                    <div className={style.listTitleContainer}>
                        <h1>WHAT COUNTRY WILL YOU VISIT NEXT?</h1>
                        <p>Explore countries and their activities and decide wich will be your next destination.</p>
                    </div>
                
                    <div>
                        <SearchBar/>
                    </div>

                    <div>
                        <Filters/>
                    </div>

            
                    <div>
                        <BotonesNextPrev/>
                    </div>
                </div>
                
                <div className={style.listHomeContainer}>
                    <CountryList/>
                </div>

            </div>
                 
        </div>
    )
}


