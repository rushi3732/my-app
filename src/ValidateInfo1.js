export default  function ValidateInfo1(values){
    let errors={}
    if(!values.username.trim()){
        errors.username="username required"

    }


    if(!values.email){
        errors.email="Email  required"

    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,}$/i.test(values.email)){
    errors.email="Email  address is invaild"
}

if(!values.password){
    errors.password="Passsword required"
}
    else if(values.password.length <6){
    errors.password="password need to 6  charecters or more "}
    
if(!values.password2){
    errors.password="Passsword required"
}
    else if(values.password2!==values.password){
    errors.password2="password do not match "}

    return errors
}