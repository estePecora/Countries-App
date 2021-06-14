import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCountryDetail } from '../../actions/index'
import style from './CountryDetail.module.css'


export default function CountryDetail() {
    const dispatch = useDispatch()
    const countryDetail= useSelector(state => state.countryDetail)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, [dispatch] )


    return (
        <div>
            <div className={style.detailContainer}>
                <div className={style.imagDetailContainer}>
                 <img src={countryDetail.flagImag} alt='Imag not found' className={style.flagimagStyle}/>
                
                </div>

                <div className={style.infoContainer}>
                    <h1 className={style.name}>{countryDetail.name}</h1>
                    <p>Country Code: {countryDetail.id}</p>
                    <p>Cpital: {countryDetail.capital}</p>
                    <p> Continent: {countryDetail.continent}</p>
                    <p> Subregion: {countryDetail.subregion}</p>
                    <p>Area: {countryDetail.area}</p>
                    <p>Population: {countryDetail.population}</p>

                </div>     
                    
            </div>
                 
        </div>
    )
}