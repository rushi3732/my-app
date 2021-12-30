







import React,{useState,useEffect} from 'react';
import './form.css';
import useForm from './UseForm';
import axios from 'axios'
import Register from './Register';
import validate from './ValidateInfo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const FormSignup = ({ submitForm }) => {
  const[flag,setFlag]=useState(true)
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const[number,setNumber]=React.useState(0)
  const[userList,setUserList]=React.useState([])
  const [message,setMessage]=useState('')
const sendData=()=>{
  console.log(values);  
  axios.post("http://localhost:8989/api/saveUser",values)
       .then(response=>{
           const res=response.data
           if(res.statusCode===201){
              console.log("Data Saved!!!");
              setMessage(res.message)
           }
          })
      //  .then(res=>{
      //      if(res.statusCode==201){
      //          console.log("Data Saved!!!");                  
      //      }
      //  })
        }

     useEffect(()=>{
         console.log("hiiiii");
        
         axios.post("http://localhost:3000/api/saveUser")
              .then(response=>response.data)
               .then(res=>{
                   setUserList(res)
               })
      },[number])
  return (
    <> 
    <Router>
    {flag?
    <div className='form-content-right'>  
     
      <form onSubmit={handleSubmit} className='form' noValidate>
    
        <div>
            <img className='form-img1' src='/img-3.svg' alt='spaceship' />
          </div>
    
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
       
        
    
        <button   className='form-input-btn' type="submit" onClick={sendData}>Submit</button>
           

           

           <ul>
               {userList.map((values)=>(
                   <li key={values.id}>{values.name+" | "+values.email}</li>
               ))}
            </ul>
            <p>{message}</p>
        <span className='form-input-login'>
           Create Your account?  <Link   to="/"onClick={()=>setFlag(false)} >Register</Link>
         </span>
      </form>
    </div>:
    <Routes>
   <Route  exact path="/" element={<Register/>} />
    </Routes>
}
</Router>
    </>
  );
};

export default FormSignup;
    
{/*




















import React,{useState} from 'react';
import './form.css';
import useForm from './UseForm';
import Register from './Register';
import validate from './ValidateInfo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const FormSignup = ({ submitForm }) => {
  const[flag,setFlag]=useState(true)
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <> 
    <Router>
    {flag?
    <div className='form-content-right'>  
     
      <form onSubmit={handleSubmit} className='form' noValidate>
    
        <div>
            <img className='form-img1' src='/img-3.svg' alt='spaceship' />
          </div>
    
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
           Create Your account?  <Link   to="/"onClick={()=>setFlag(false)} >Register</Link>
        
       

           
        </span>
      </form>
    </div>:
    <Routes>
    <Route  exact path="/" element={<Register/>} />
    </Routes>
}
</Router>
    </>
  );
};

export default FormSignup;*/}
    
