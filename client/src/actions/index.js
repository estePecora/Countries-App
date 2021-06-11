import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const ACTIVITY_DETAIL = 'ACTIVITY_DETAIL'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'



export function getCountries() {
    return (dispatch) => {
      axios.get("http://localhost:3001/countries/countries")
        .then(response => {
          dispatch({ type: "GET_COUNTRIES", payload: response.data })
        })
    }
  };
  
  export function getCountryDetail(id) {
    return (dispatch) => {
      axios.get(`http://localhost:3001/countries/${id}`)
        .then(response => {
          dispatch({ type: "COUNTRY_DETAIL", payload: response.data })
        })
    }
  };
  
  export function addActivity(payload) {
    // return(dispatch) => {
    //   axios.post("http://localhost:3001/activities", payload)
    //   .then (response => {
    //     console.log(response)
    //     dispatch ({
    //       type: ADD_ACTIVITY,
    //       payload: response.data
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    //   })  
    // }  
    return {
      type: ADD_ACTIVITY,
      payload
    }
  };

  export function getActivity(payload) {
      return {
        type: GET_ACTIVITY,
        payload
      }
    };
  
    export function getActivityDetail(id) {
      return {
        type: ACTIVITY_DETAIL,
        payload: id
      }
    };

