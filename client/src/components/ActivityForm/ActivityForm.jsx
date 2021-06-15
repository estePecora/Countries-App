import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity } from '../../actions/index'
import style  from './ActivityForm.module.css'


function ActivityForm() {
    const countrynames = useSelector(state => state.listOfCountries)
    const dispatch = useDispatch()
    const [localstate, setLocalstate] = useState({
        activityName: "",
        dificulty: "",
        duration: "",
        season: "",
        countries: []
      })
  
      
    function handleChange (event) {
        setLocalstate({...localstate, [event.target.name]: event.target.value})
    }

    function handleChoices (event) {
        setLocalstate({...localstate, [event.target.name]: localstate.countries.push(event.target.value) })
    }

    function handleReset() {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        )
    }

    function resetState() {
        setLocalstate({
            activityName: "",
            dificulty: "",
            duration: "",
            season: "",
            countries: []
          })
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addActivity(localstate))
        handleReset()
        resetState()
    
    }


    return (
        <div>
        
            <div className={style.formContainer}>
                <h1>ADD ACTIVITIES</h1>
                <form onSubmit={handleSubmit} className={style.form} >
                    <label>Name of the activity:</label>
                    <input onChange={handleChange} name="activityName"></input>

                    <label>Dificulty:</label>
                    <input onChange={handleChange} name="dificulty"></input>

                    <label>Duration:</label>
                    <input onChange={handleChange} name="duration"></input>

                    <label>Season:</label>
                    <input onChange={handleChange} name="season"></input>

                    <label>Countries:</label>
                    <select name="countries" id="countries" >
                        {countrynames.map(el => {
                        return <option value={el.name} onClick={handleChoices}>{el.name}</option>
                        })}    
                    </select>

                    <button type='submit'  className={style.submitButton}>SUBMIT</button>

                </form>

                
            </div>
         
        </div>
    )
  
};


export default ActivityForm;
