import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryName } from '../../actions/index'
// import style from './SearchBar.module.css'


function SearchBar() {
   const [ search, setSearch ] = useState("")
   const dispatch = useDispatch()

   function handleChange (e) {
       setSearch(e.target.value)
   }

   function handleSubmit (e) {
       e.preventDefault();
       dispatch(getCountryName(search))

   }


    return (
        <div>
        
            <form onSubmit={handleSubmit}>
            
            <label className="label" htmlFor="title">Find Countries: </label>
            
            <div>
              <input
                type="text"
                id="countryName"
                autoComplete="off"
                value={search}
                onChange={handleChange}
              />
              <button type="submit">SEARCH</button>
            </div>
          </form>

        </div>
        
            
    )
};

export default SearchBar;