import React from 'react';
// import { useSelector } from 'react-redux';
import style from './CountryCard.module.css'
// import {Link} from 'react-router-dom'


function CountryCard({flagImag, name, continent}) {
    // const allCountries = useSelector(state => state.listOfCountries)
   
    return (
        <div>
            <div className={style.cardcontainer}>
            
            <div className={style.innercontainer}>
                
                    <img src={flagImag} alt='Imag not found' className={style.flagImag}/>
                    {/* <Link to={`/countries/${props.allCountries.id}`} >  </Link> */}
                    
                    <div className={style.textDiv}>
                      <h3>{name}</h3>
                      <p>Continent: {continent}</p>
                    </div>
                    
            </div>
        </div>  


        </div>
        
            
    )
};

export default CountryCard;

