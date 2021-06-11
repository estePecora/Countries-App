import React, {useState} from 'react';
import style  from './ActivityForm.module.css'
import { connect } from 'react-redux'

export default function ActivityForm(props) {
    const [localstate, setLocalstate] = useState({
        activityname: "",
        dificulty: "",
        duration: "",
        season: "",
      })
   

    // const handleChange = (event) => {
    //     setLocalstate({...localstate, [event.target.name]: event.target.value})
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.newActivity(localstate)
    
    // }


    return (
        <div><h1>FORM</h1></div>
        
        // <div className={style.form}>
        //     <h1>FORM</h1>
        //     <form onSubmit={handleSubmit} >
        //         <label>Name of the activity:</label>
        //         <input onChange={handleChange} name="activityname"></input>

        //         <label>Dificulty:</label>
        //         <input onChange={handleChange} name="dificulty"></input>

        //         <label>Duration:</label>
        //         <input onChange={handleChange} name="duration"></input>

        //         <label>Season:</label>
        //         <input onChange={handleChange} name="season"></input>

        //         {/* <label>Countries:</label>
        //         <input onChange={handleChange} name="date"></input> */}

        //         <button type='submit'>SUBMIT</button>

        //     </form>
         
        // </div>
    )
  
};


// const mapDispatchToProps = (dispatch) => {
//     return {
//         newActivity: function(localstate) {
//             dispatch(addActivity(localstate))
//         }
//     }
// };
  

// export default connect(null, mapDispatchToProps)(ActivityForm);
