import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getOrder } from '../../actions/index';
import style from './BotonesyFiltrados.module.css'

function BotonesyFiltrados() {
    const dispatch = useDispatch()

    const [order, setOrder] = useState({
        type: "name",
        orderby: "ASC",
      })


    // --------------------- FILTROS ----------------------//


      function handleOrder (event) {
        event.preventDefault()
        setOrder({...order, [event.target.name]: event.target.value})
        
      } 
  
      function handleOrderSubmit (event) {
        event.preventDefault()
        dispatch(getOrder(order))
  
      }
    


    return (

        <div>

            <div className={style.orderContainer}>
                <form onSubmit={handleOrderSubmit}>
                    <select name="type" onChange={handleOrder} className={style.orderMenu}>
                        <option  value='name'>name</option>
                        <option  value='population'>population</option>
                    </select>

                    <select name="orderby" onChange={handleOrder} className={style.orderMenu}>    
                        <option value='ASC'>ascendente</option>
                        <option value='DESC'>descendente</option>         
                    </select>

                    <button type='submit' className={style.orderButton}>ORDER BY</button>

                </form>
            </div>
            
            <div>
                <Link to={'/otherlist/filters/filter'}>
                <button className={style.buttonFindCountries}>FILTER BY CONTINENT AND ACTIVITIES</button>
                </Link>       
            </div>


        </div>

    )
}



export default BotonesyFiltrados;