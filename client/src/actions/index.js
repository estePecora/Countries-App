import axios from 'axios'

export const SET_PAGE = 'SET_PAGE'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const ACTIVITY_DETAIL = 'ACTIVITY_DETAIL'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const GET_COUNTRY_PAGES = 'GET_COUNTRY_PAGES'
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME'
export const GET_ORDER = 'GET_ORDER'

  export function setPage(payload) {
    return { 
      type: SET_PAGE, 
      payload: payload 
    }
  };

  export function getCountries() {
      return (dispatch) => {
        axios.get("http://localhost:3001/countries")
          .then(response => {
            dispatch({ type: "GET_COUNTRIES", payload: response.data })
          })
      }
    };

  export function getCountryPages(pageNum) {
    return (dispatch) => {
      axios.get(`http://localhost:3001/countries/page?page=${pageNum}`)
        .then(response => {
          dispatch({ type: "GET_COUNTRY_PAGES", payload: response.data })
        })
    }
  };

  export function getOrder(payload) {
    console.log(payload)
    return (dispatch) => {
      axios.get(`http://localhost:3001/countries/countries/${payload.type}/${payload.orderby}/${payload.page}`)
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
          dispatch({ type: "GET_COUNTRY_NAME", payload: response.data })
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


