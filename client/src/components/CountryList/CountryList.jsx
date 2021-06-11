import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard'
import style from './CountryList.module.css'

function CountryList() {
   const allCountries = useSelector(state => state.listOfCountries)

    return (
        <div>
            <div className={style.list}>
                     
                <h1>WHAT COUNTRY WILL YOU VISIT NEXT?</h1>
                <p>Explore countries and their activities and decide wich will be your next destiny</p>

                <div className={style.cardContainer}>
                    {allCountries.map(el => {
                        return <div> 
                            <CountryCard
                                flagImag={el.flagImag}
                                name={el.name}
                                continent={el.continent}
                            />
                        </div>})
                    }
                </div>
                  
            </div>
                 
        </div>
    )
}

export default CountryList;
// function mapStateToProps(state) {
//     return {
//         allCountries: state.listOfCountries
//     }
//   };


// export default connect (mapStateToProps)(CountryList)