import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../actions/index'
import CountryList from '../CountryList/CountryList'
// import style from './Home.module.css'

export default function Home() {
    const dispatch = useDispatch()
    const countries= useSelector(state => state.listOfCountries)
   
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch] )

    console.log(countries)

    return (
        <div>
            <div>
               
                <h1>THIS IS HOME</h1>
                <h1>HERE GOES SEARCH BAR</h1>
                <h1>HERE GOES FILTER OPTIONS</h1>
                <h1>HERE GOES COUNTRIES LIST</h1>
                <CountryList></CountryList>
                    
               
            </div>
                 
        </div>
    )
}

