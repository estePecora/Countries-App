import { GET_COUNTRIES, COUNTRY_DETAIL, GET_ACTIVITY, ACTIVITY_DETAIL, ADD_ACTIVITY } from '../actions'


const initialState = {
    listOfCountries: [],
    countryDetail: [],
    activityDetail: [],
    activitiesAdded: []
};

export function rootReducer (state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES:
            return{
                ...state,
                listOfCountries: action.payload
            }
         case COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail: action.payload
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
                return(
                    state.concat(
                      { activityname: action.payload.activityname,
                        dificulty: action.payload.dificulty,
                        duration: action.payload.duration,
                        season: action.payload.season
                      })
                )
                
        default:
            return state;
    };

};

export default rootReducer;