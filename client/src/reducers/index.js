import { SET_PAGE,
        GET_COUNTRIES, 
        GET_COUNTRY_PAGES, 
        GET_COUNTRY_DETAIL, 
        GET_COUNTRY_NAME,
        GET_ACTIVITY, 
        GET_ORDER,
        ACTIVITY_DETAIL, 
        ADD_ACTIVITY
    } from '../actions'


const initialState = {
    listOfCountries: [],
    countryDetail: [],
    orderedCountries: [],
    activityDetail: [],
    activitiesAdded: [],
    currentPage: 0
};

export function rootReducer (state = initialState, action) {

    switch (action.type) {
        case SET_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        case GET_COUNTRIES:
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
        case GET_ORDER:
            return{
                ...state,
                orderedCountries: action.payload
            }   
        case GET_ACTIVITY:
            return{
                ...state,
                activities: action.payload
            }
        case ACTIVITY_DETAIL:
                return{
                    ...state,
                    activityDetail: action.payload
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
                
        default:
            return state;
    };

};

export default rootReducer;