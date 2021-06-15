import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getCountryPages, getCountries } from '../../actions/index';
import CountryList from '../CountryList/CountryList'
import BotonesNextPrev from '../BotonesNextPrev/BotonesNextPrev'
import SearchBar from '../SearchBar/SearchBar'
import style from './Home.module.css'

export default function Home() {
    // const dispatch = useDispatch()
    const countries = useSelector(state => state.listOfCountries)
    
    // useEffect(() => {
    //     dispatch(getCountries())    
    // }, [dispatch] )


    return (
        <div>
        
            <div className={style.mainHomeContainer}>
                
                <div className={style.optionsContainer}>
                    <div className={style.listTitleContainer}>
                        <h1>WHAT COUNTRY WILL YOU VISIT NEXT?</h1>
                        <p>Explore countries and their activities and decide wich will be your next destination.</p>
                    </div>
                
                    <h4>HERE GOES FILTER OPTIONS</h4>
                    <div>
                        <SearchBar></SearchBar>
                    </div>
                    <div>
                        <BotonesNextPrev></BotonesNextPrev>
                    </div>
                </div>
                
                <div className={style.listHomeContainer}>
                    <CountryList></CountryList>
                </div>

            </div>
                 
        </div>
    )
}


