import {
        GET_COUNTRIES, 
        GET_ALL_COUNTRIES,
        GET_COUNTRY_PAGES, 
        GET_COUNTRY_DETAIL, 
        GET_COUNTRY_NAME,
        RESET_COUNTRY_NAME,
        GET_ORDER,
        ERROR,
        RESET_ERROR,
        ADD_ACTIVITY
    } from '../actions'


const initialState = {
    listOfCountries: [],
    countryDetail: [],
    countryByName: [],
    activitiesAdded: [],
    setError: []
};

export function rootReducer (state = initialState, action) {

    switch (action.type) {
       
        case GET_COUNTRIES:
            return{
                ...state,
                listOfCountries: action.payload
            }
        case GET_ALL_COUNTRIES:
            return{
                    ...state,
                    listOfCountries: action.payload
            }
        case GET_COUNTRY_PAGES:
            return{
                ...state,
                listOfCountries: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail: action.payload
            }
        case GET_COUNTRY_NAME:
            return{
                ...state,
                listOfCountries: action.payload
            }  
        case RESET_COUNTRY_NAME:
            return{
                ...state,
                listOfCountries: action.payload
            }  
        case GET_ORDER:
            return{
                ...state,
                listOfCountries: action.payload
            }   
        case ADD_ACTIVITY:
                return{
                    ...state,
                    activitiesAdded: state.activitiesAdded.concat({ 
                        activityname: action.payload.activityname,
                        dificulty: action.payload.dificulty,
                        duration: action.payload.duration,
                        season: action.payload.season,
                        countries: action.payload.countries,
                      })
                    
                }
        case ERROR:
                return{
                    ...state,
                    setError: action.payload
                }
        case RESET_ERROR:
                return{
                    ...state,
                    setError: action.payload
                }
                
        default:
            return state;
    };

};

export default rootReducer;