import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCountryPages, getCountries } from '../../actions/index';
import CountryList from '../CountryList/CountryList'
import style from './Home.module.css'

export default function Home() {
    const dispatch = useDispatch()
    const countries= useSelector(state => state.listOfCountries)
    const useQuery = () => new URLSearchParams(useLocation().search)
    let query = useQuery()
    const page = query.get('page')
    
    
    useEffect(() => {
        if(!page){
            dispatch(getCountries())
        } else if (page && page!==0) {
            dispatch(getCountryPages(page))
        }
        
    }, [dispatch] )

  

    return (
        <div>
        
            <div className={style.mainHomeContainer}>
                
                <div className={style.optionsContainer}>
                    <div className={style.listTitleContainer}>
                        <h1>WHAT COUNTRY WILL YOU VISIT NEXT?</h1>
                        <p>Explore countries and their activities and decide wich will be your next destination.</p>
                    </div>
                    <h4>SEARCH COUNTRIES</h4>
                    <input className={style.searchInput}></input>
                    <h4>HERE GOES FILTER OPTIONS</h4>
                    <h4>BOTON PREV NEXT</h4>
                </div>
                
                <div className={style.listHomeContainer}>
                    <CountryList></CountryList>
                </div>
            
               
            </div>
                 
        </div>
    )
}








//----------------------------------------------------
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCountries } from '../../actions/index'
// import CountryList from '../CountryList/CountryList'
// import style from './Home.module.css'

// export default function Home() {
//     const dispatch = useDispatch()
//     const countries= useSelector(state => state.listOfCountries)
   
//     useEffect(() => {
//         dispatch(getCountries())
//     }, [dispatch] )

//     console.log(countries)

//     return (
//         <div>
//             <div className={style.mainHomeContainer}>
                
//                 <div className={style.optionsContainer}>
//                     <div className={style.listTitleContainer}>
//                         <h1>WHAT COUNTRY WILL YOU VISIT NEXT?</h1>
//                         <p>Explore countries and their activities and decide wich will be your next destination.</p>
//                     </div>
//                     <h4>SEARCH COUNTRIES</h4>
//                     <input className={style.searchInput}></input>
//                     <h4>HERE GOES FILTER OPTIONS</h4>
//                 </div>
                
//                 <div className={style.listHomeContainer}>
//                     <CountryList></CountryList>
//                 </div>
            
               
//             </div>
                 
//         </div>
//     )
// }
