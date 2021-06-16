import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../actions/index'
// import { addActivity } from '../../actions/index'
// import style  from './ActivityForm.module.css'


function Filters() {
    const countrynames = useSelector(state => state.orderedCountries)
    const currentPage = useSelector(state => state.currentPage)
 
    const dispatch = useDispatch()
    const [order, setOrder] = useState({
        type: "name",
        orderby: "ASC",
        page: 0
      })

    const [filter, setFilter] = useState({
        continent: "Americas",
        activityName: "surf",
      })

    function handleOrder (event) {
      event.preventDefault()
      setOrder({...order, [event.target.name]: event.target.value})
      
    } 

    function handleOrderSubmit (event) {
      event.preventDefault()
      dispatch(getOrder(order))

    }

    function handleFilter (event) {
      event.preventDefault()
      setFilter({...order, [event.target.name]: event.target.value})
      
    } 

    function handleFilterSubmit (event) {
      event.preventDefault()
      dispatch(getOrder(order))

    }


    return (

      <div>
        <p>Order by:</p>
        <form onSubmit={handleOrderSubmit}>
          <select name="continent" onChange={handleOrder} >
              <option  value='Americas'>Americas</option>
              <option  value='Europe'>Europe</option>
              <option  value='Africa'>Africa</option>
              <option  value='Asia'>Asia</option>
              <option  value='Oceania'>Oceania</option>
          </select>

          <select name="orderby" onChange={handleOrder} >    
              <option value='surf'>surf</option>
              <option value='sky'>sky</option>   
              <option value='raffting'>raffting</option>        
          </select>
          <button type='submit'>FILTER</button>

        </form>

        <p>Filter by:</p>
        <form onSubmit={handleFilterSubmit}>
          <select name="type" onChange={handleFilter} >
              <option  value='name'>name</option>
              <option  value='population'>population</option>
          </select>

          <select name="orderby" onChange={handleFilter} >    
              <option value='ASC'>ascendente</option>
              <option value='DESC'>descendente</option>         
          </select>
          <button type='submit'>FILTER</button>

        </form>
        
        

      </div>
    )

};

export default Filters;