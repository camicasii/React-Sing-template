import React,{useRef,useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory  } from 'react-router-dom';

const FormSingUp = (props) => {    
    const history =useHistory();
    const [username,setusername]=useState(null)
    const [password,setpassword]=useState(0)        
    const [isAxios,setisAxios]=useState(false)        
    const usernameRef =useRef()
    const passwordRef =useRef()    
    const spinner =(<div class="spinner-border text-secondary d-none" id="spinner" role="status">
    <span class="sr-only">Loading...</span>
  </div>)  
    let timeoutId;
    useEffect(()=>{
      setusername(usernameRef.current.value);         
        setpassword(passwordRef.current.value);
    },[])

    const debounce =(event)=>{
      event.preventDefault();       
        
      if(timeoutId){
        return
      }
      timeoutId = setTimeout(()=>submit());      
    }
  
    async function submit(){                 
        setusername(usernameRef.current.value);         
        setpassword(passwordRef.current.value);
        if(isAxios){   
          return
        }  
        const spinner_ = document.getElementById("spinner")
        const data={
            username,
            password
        }        
            console.log("paso");            
          spinner_.classList.toggle("d-none");
          setisAxios(true);
          
          await axios.post('/api/util/singup',data)
        .then(res=>{
            if(res.status===200){
              spinner_.classList.toggle("d-none");              
            history.push('/profile')
          }
        })
        .catch((res)=>{
          if(res.toString().search("401")!==-1){
            props.toast("User or password invalido","bg-warning")
          }else
          if(res.toString().search("400")!==-1){
            props.toast("error","bg-warning")
          } else     
          if(res.toString().search("500")!==-1){
            props.toast("Error connection","bg-danger")
          }
            spinner_.classList.toggle("d-none");
            setisAxios(false);
        
    })
  
  
  }
    
    return (
      <div className="row justify-content-center">
      <div className="card col-md-6 col-11 p-2 border border-primary" >
      <div className="card-title text-center pt-3 text-success">
        <h2>SingUp</h2>
      </div>
    <div className="car-body p-md-4 ">

<form onSubmit={event=>debounce(event)}>
  <div className="form-group" >
    <label for="exampleInputUser">Username</label>
    <input type="text" className="form-control border border-success" id="exampleInputUser"  placeholder="Enter User" ref={usernameRef} />    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control border-success" id="exampleInputPassword1" placeholder="Password" ref={passwordRef}         
    />
  </div>  
  <div className="d-flex-inline">
  <button type="submit" className="btn btn-primary mr-5">Submit</button>
  {spinner}
  
  </div>
  
</form>


    </div> 
    </div> 
    </div>
    );
}
 
export default FormSingUp;

