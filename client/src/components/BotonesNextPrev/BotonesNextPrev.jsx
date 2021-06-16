import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryPages } from '../../actions/index';
import { setPage } from '../../actions/index'
import style from './BotonesEstilo.module.css'

export default function BotonesNextPrev() {
    const [newPage, setNewpage ] = useState(1)
    const dispatch = useDispatch()


    
    function increasePage (event) {
        event.preventDefault()
        setNewpage(prevPage => prevPage + 1 )
        dispatch(setPage(newPage))
        
        dispatch(getCountryPages(newPage)) 
       
    }

    function decreasePage (event) {
        event.preventDefault()
        if (newPage === 0) {
            dispatch(setPage(newPage))
            dispatch(getCountryPages(newPage)) 

        } else {
            setNewpage(prevPage => prevPage - 1 )
            dispatch(setPage(newPage))
            dispatch(getCountryPages(newPage))  
        }
        
    }


    return (
        <div>
            <div>
                <button onClick={decreasePage} className={style.botonesNextPrev}>PREV</button> 
                <button onClick={increasePage} className={style.botonesNextPrev}>NEXT</button>    
            </div>
                 
        </div>
    )
}