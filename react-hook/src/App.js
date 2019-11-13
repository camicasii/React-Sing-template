import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import $ from 'jquery';


import './App.css';
import FormSingIn from './components/FormSingIn';
import Profile from './components/Profile';
import Toast from './components/Toast';
import FormSingUp from './components/FormSingup';
function App() {
const [sms,setsms]=useState(null)

  function toast(sms_,color){       
    setsms(sms_)    
    $("#snackbar").toggleClass(`show ${color}`);
    setTimeout(()=>$("#snackbar").toggleClass(`show ${color}`),5500);
  }

  return (
    <div className="container-flux " id="container" >
  
    <header className="mt-4  ml-5">
    <ul class="nav ">
  <li class="nav-item">
    <h1 class="text-success" href="#">Login Template</h1>
  </li>  
</ul>
<Toast sms={sms} />
    </header>
    <div className="mt-5 mb-5 container  "  >
    <button className="btn btn-primary d-none " onClick={()=>toast()}> toast</button>
    
    <Router>
    <ul class="nav bg-blue mb-4 justify-content-center" >
  <li class="nav-item">
  <Link to="/" ><span class="nav-link text-primary" >Home</span></Link>
  </li>  
  <li class="nav-item">
    <Link to="/singup" ><span class=" nav-link text-primary">SingUp</span></Link>
  </li>
  <li class="nav-item">
    <Link to="/profile" ><span class=" nav-link text-primary">Profile</span></Link>
  </li>
  
</ul>    
  <div className=" justify-content-center">
      <Switch>
        <Route exact path="/" render={()=>{
          return <FormSingIn   toast={toast} />
        }} />
        <Route exact path="/singup" render={()=>{
          return <FormSingUp  toast={toast} />
        }} />
        <Route exact path="/profile" component={Profile} />

      </Switch>
    </div>
    </Router>
    
    </div>
    <footer className="d-flex justify-content-center w-100 mt-4">
    <ul class="nav">
  <li class="nav-item">
    <h3 class="text-primary" >@camicasii</h3>
  </li>  
</ul>
    </footer>
  </div>
  );
}

export default App;
