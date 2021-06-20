import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../actions/index';
import CountryCard from '../CountryCard/CountryCard'
import style from './FilterCountriesList.module.css'

function FilterCountriesList() {
    const allCountries = useSelector(state => state.listOfCountries)
    const dispatch = useDispatch()

    const [ currentPage, setPage ] = useState({
        first: 0,
        last: 10
    })

    const [selectedFilter, setFilter] = useState({
                continent: "Americas",
                activityName: "none",
            })
        
    const [ list, setList ] = useState(allCountries)

    
    useEffect(() => {
        dispatch(getAllCountries())    
    }, [] )

    function handleFilterContinent (event) {
        event.preventDefault()
        setPage({...currentPage, 
            first: 0,
            last: 10
        })
        setFilter({...selectedFilter, [event.target.name]: event.target.value})
              
    } 

    function handleFilterActivity (event) {
        event.preventDefault()
        setFilter({...selectedFilter, [event.target.name]: event.target.value})
              
    } 

    function filterSubmit (event) {
        event.preventDefault()
        setPage({...currentPage, 
            first: 0,
            last: 10
        })

            if (selectedFilter.activityName !== "none") {
                setList(
                allCountries.filter(filterel => 
                    filterel.continent===selectedFilter.continent &&
                    filterel.activities.some(act => act.activityName === selectedFilter.activityName) ) )
                    
            } else {
                console.log(allCountries)
                setList(
                allCountries.filter(filterel => 
                    filterel.continent===selectedFilter.continent ) )
            }
        
    }



    //--------------------------BOTONES PAGINADO------------------------------------------

    function handleNextPage (event) {
        event.preventDefault()
        setPage({...currentPage, 
            first: currentPage.first + 11,
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
                first: currentPage.first - 11,
                last: currentPage.last - 10
            })
        }
      
    } 
    
    
   

    return (
        <div>

            <div className={style.filterlist} > 
                
                <div className={style.filteroptionsContainer}>
                    <h1>FILTRAR PAISES POR<br/>CONTINENTE Y ACTIVIDADES</h1>
                    <p>Filter by:</p>
                    <form onSubmit={filterSubmit}>
                    <label>Continent</label>
                    <select name="continent" onChange={handleFilterContinent} >
                        <option  value='Americas'>Americas</option>
                        <option  value='Europe'>Europe</option>
                        <option  value='Africa'>Africa</option>
                        <option  value='Asia'>Asia</option>
                        <option  value='Oceania'>Oceania</option>
                    </select>
                    <label>Activities</label>
                    <select name="activityName" onChange={handleFilterActivity} >    
                        <option value='none'>none</option>
                        <option value='surf'>surf</option>
                        <option value='sky'>sky</option>   
                        <option value='raffting'>raffting</option> 
                        <option value='birdwatching'>birdwatching</option>
                        <option value='horse riding'>horse riding</option>          
                    </select>
                    <button type="submit">FILTER</button>
                    </form>
                       

                    <div className={style.filterPagesButtons}>
                        <button onClick={handlePrevPage} className={style.filterPrevNext}>PREV</button>
                        <button onClick={handleNextPage} className={style.filterPrevNext}>NEXT</button>
                        
                    </div>

                </div>  
             
            
           
                <div className={style.filtercardContainer}>
                        {   list.slice(currentPage.first, currentPage.last)
                                .map(el => (
                                    <div key={el.id}> 
                                    <CountryCard
                                    id ={el.id}
                                    flagImag={el.flagImag}
                                    name={el.name}
                                    continent={el.continent}
                                    />
                                    </div>))
                        }
                </div> 
           
             
                  
            </div>
                 
        </div>
    )
    
}

export default FilterCountriesList;
