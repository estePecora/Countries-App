import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard'
import style from './CountryList.module.css'

function CountryList() {
   const allCountries = useSelector(state => state.listOfCountries)
   const setError = useSelector(state => state.setError)
   const rendercountries = allCountries
   

   const [ currentPage, setPage ] = useState({
    first: 0,
    last: 10
    })
   
  

    function handleNextPage (event) {
        event.preventDefault()
        setPage({...currentPage, 
            first: currentPage.first + 10,
            last: currentPage.last + 10
        })        
    } 

    function handlePrevPage (event) {
        event.preventDefault()
        if (currentPage.first === 0){
            setPage({...currentPage, 
                first: 0,
                last: 10
            })

        } else {
            setPage({...currentPage, 
                first: currentPage.first - 10,
                last: currentPage.last - 10
            })
        }
      
    } 

    

    return (
        <div>
            <div className={style.mainListContainer}>
            <div className={style.pagesbuttonsContainer}>
                    <button onClick={handlePrevPage} className={style.pagesButtons}>PREV</button>
                    <button onClick={handleNextPage} className={style.pagesButtons}>NEXT</button>
            </div>

            <div className={style.list}>   
                <div className={style.cardContainer}>
                        {   setError.message ? <div><h1>{setError.message}</h1></div>
                            : rendercountries.length !== 0 && rendercountries.slice(currentPage.first, currentPage.last)
                            .map(el => {
                            return <div key={el.id}> 
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
        </div>
    )
    
}

export default CountryList;
