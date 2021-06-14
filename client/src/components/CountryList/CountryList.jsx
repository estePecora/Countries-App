import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard'
import style from './CountryList.module.css'

function CountryList() {
   const allCountries = useSelector(state => state.listOfCountries)
     
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
}

export default CountryList;
