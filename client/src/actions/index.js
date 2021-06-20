import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const GET_COUNTRY_PAGES = 'GET_COUNTRY_PAGES'
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME'
export const RESET_COUNTRY_NAME = 'RESET_COUNTRY_NAME'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const GET_ORDER = 'GET_ORDER'
export const ERROR = 'ERROR'
export const RESET_ERROR = 'RESET_ERROR'


  export function getCountries() {
      return (dispatch) => {
        axios.get("http://localhost:3001/countries")
          .then(response => {
            dispatch({ type: GET_COUNTRIES, payload: response.data })
          })
      }
    };


  export function getAllCountries() {
      return (dispatch) => {
        axios.get("http://localhost:3001/countries/countries/all")
          .then(response => {
            dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })
          })
      }
    };
  


  export function getCountryPages(payload) {
    return (dispatch) => {
      axios.get(`http://localhost:3001/countries/${payload.endpoint}${payload.page}`)
        .then(response => {
          dispatch({ type: GET_COUNTRY_PAGES, payload: response.data })
        })
    }
  };

  export function getOrder(payload) {
    console.log(payload)
    return (dispatch) => {
      axios.get(`http://localhost:3001/countries/order/${payload.type}/${payload.orderby}`)
      .then(response => {
        dispatch({ type: GET_ORDER, payload: response.data })
      })
    } 
  };

  export function getCountryDetail(id) {
    return (dispatch) => {
      axios.get(`http://localhost:3001/countries/${id}`)
        .then(response => {
          dispatch({ type: "GET_COUNTRY_DETAIL", payload: response.data })
        })
    }
  };

  export function getCountryName(payload) {
    return (dispatch) => {
      axios.get(`http://localhost:3001/countries/name/${payload}`)
        .then(response => {
          dispatch({ type: GET_COUNTRY_NAME, payload: response.data })
        })
        .catch (error => {
          console.log(error.response)
          dispatch({ type: ERROR, payload: error.response.data })
        })
    }
  };

  export function resetCountryName() {
    return (dispatch) => {
      axios.get("http://localhost:3001/countries")
        .then(response => {
          dispatch({ type: RESET_COUNTRY_NAME, payload: response.data })
        })
    }
  };

  export function addActivity(payload) {
    console.log(payload)
    return (dispatch) => {
      axios.post("http://localhost:3001/activities", payload)
      .then(response => {
        dispatch({ type: ADD_ACTIVITY, payload: response.data })
      })
    }  
    
  };

  export function resetError(payload) {
    return { 
      type: RESET_ERROR, 
      payload 
    }
      
  };



