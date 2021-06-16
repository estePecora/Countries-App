import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard'
import style from './CountryList.module.css'

function CountryList() {
   const allCountries = useSelector(state => state.listOfCountries)
   const orderedCountries = useSelector(state => state.orderedCountries)

   if (orderedCountries.length === 0) {
    return (
        <div>

            <div className={style.list}>    
           
                <div className={style.cardContainer}>
                    {allCountries.map(el => {
                        return <div> 
                            <CountryCard
                                id ={el.id}
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

   } else {
       return (
           <div>
               <div className={style.list}>    
           
                    <div className={style.cardContainer}>
                    {orderedCountries.map(el => {
                        return <div> 
                            <CountryCard
                                id ={el.id}
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
    
}

export default CountryList;
