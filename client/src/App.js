import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NvBar/NavBar'
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import ActivityForm from './components/ActivityForm/ActivityForm'


function App() {
  return (
    <div className="App">

      <Route exact path='/' component={Landing}/>
      <Route path='/' component={NavBar}/>
      <Route path='/home' component={Home}/>
      <Route path='/addactivities' component={ActivityForm}/>
      
    </div>
  );
}

export default App;
