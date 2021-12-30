import React,{useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccees from './FormSuccees'
import './form.css';

const Form = () => {
    const[isSubmitting,setIsSubmitting]=useState(false)
    function submitForm (){
        setIsSubmitting(true)
    }
    return (
        <>
        <div className='form-container'>
       
          {!isSubmitting ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccees />
          )}
        </div>
      </>
    );
  };

export default Form
