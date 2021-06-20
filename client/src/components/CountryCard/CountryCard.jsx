import React from 'react';
import style from './CountryCard.module.css'
import {Link} from 'react-router-dom'


function CountryCard({id, flagImag, name, continent}) {
   const idparam = id

    return (
        <div>
            
            <div className={style.cardcontainer}>
                    
                <div className={style.innercontainer}>
                    
                    <img src={flagImag} alt='Imag not found' className={style.flagImag}/>
                
                    <div className={style.textDiv}>
                      
                      <h3 className={style.titleStyle}>{name}</h3>
                      <p className={style.textStyle}>Continent: {continent}</p>
                      <Link to={`/countrydetail/${idparam}`} className={style.cardLinks}>
                        <button className={style.infoButton}>MORE INFO</button>
                      </Link>
                    </div>
                    
                </div>
            </div>  
           


        </div>
        
            
    )
};

export default CountryCard;

