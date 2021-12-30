import React from 'react';

import './form.css';
import UseForm1 from './UseForm1';
import ValidateInfo1 from './ValidateInfo1';





const Register= ({ submitForm }) => {

  const { handleChange, handleSubmit, values, errors } = UseForm1(
    submitForm,
   ValidateInfo1
  );

  return (

    
    <div className='form-content-right'>  
     
      <form onSubmit={handleSubmit} className='form' noValidate>
    
      <div>
        <h1 className="">Registration</h1>
      </div>
    
        <div className='form-inputs'>
          <label className='form-label'>FirstName</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your First name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>LastName</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your Last name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
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
      Register
        </button>
      
           
    
      </form>
    </div>
   
  );
};

export default Register