export default (data)=>{
    let errors = {};
    if(!data.email.includes('@')){
        errors.email = "Email is not valid";
    }
    if(!data.email){
        errors.email = "Email is required";
    }
    if(data.email.length > 35){
        errors.email = "Email is too long";
    }
    if(!/\d/.test(data.password)){
        errors.password = 'Almenos tiene que contener un numero'
    }
    if(data.password.length < 8){
        errors.password = "Password is too short";
    }
    if(data.password.length > 35){
        errors.password = "Password is too short";
    }
    return errors
};