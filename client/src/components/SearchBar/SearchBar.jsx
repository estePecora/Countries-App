import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryName, resetCountryName, resetError } from '../../actions/index'
import style from './SearchBar.module.css'


function SearchBar() {
   const setError = useSelector(state => state.setError)
   const [ search, setSearch ] = useState("")
   const dispatch = useDispatch()

   function handleChange (event) {
       setSearch(event.target.value)
   }

   function handleSubmit (event) {
       event.preventDefault();
       if (search !== "") {
        dispatch(getCountryName(search))
        setSearch("")
       } else {
         alert("please enter a country")
       }
      

   }

   function backToCountries (event) {
      event.preventDefault();
      dispatch(resetCountryName())
      dispatch(resetError([]))

   }


    return (
        <div>
          <div className={style.searchMainContainer}>
  
              <div className={style.searchContainer}>
                <form onSubmit={handleSubmit} className={style.searchformContainer}>
                  <input 
                    type="text"
                    id="countryName"
                    autoComplete="off"
                    placeholder="Find Countries..."
                    value={search}
                    onChange={handleChange}
                    className={style.inputStyle}
                  />
                  <button type="submit" className={style.searchButton}>SEARCH</button>
                </form>
              </div>
            
              <div className={style.backButtonContainer}>
                <button onClick={backToCountries} className={style.backButton}>BACK TO COUNTRIES LIST</button>
              </div>
            </div>
        </div>
              
    )
};

export default SearchBar;