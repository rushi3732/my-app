import { useState, useEffect } from 'react';

import axios from 'axios'
import ValidateInfo1 from './ValidateInfo1';

const useForm = (callback, ) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname:"",
    email: '',
    password:"",
    password2:""
   
  });
  const [errors, setErrors] = useState({});
  const [number] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const[userList,setUserList]=useState([])

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
      
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(ValidateInfo1(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );




console.log(values);

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;