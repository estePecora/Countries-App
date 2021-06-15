import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryPages } from '../../actions/index'
import style from './BotonesEstilo.module.css'

export default function BotonesNextPrev() {
    const [ currentPage, setcurrentPage ] = useState(0)
    const dispatch = useDispatch()

    function increasePage () {
        setcurrentPage(prevPage => prevPage + 1)
        dispatch(getCountryPages(currentPage))
    }

    function decreasePage () {
        if (currentPage === 0) {
            dispatch(getCountryPages(currentPage))

        } else {
            setcurrentPage(prevPage => prevPage - 1)
            dispatch(getCountryPages(currentPage))
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