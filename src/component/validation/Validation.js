
const Validation=(user)=>{
  console.log(user)
    let errors={}
    if(!user.name){
        errors.name="name is required"
    }
    if(!user.username){
        errors.username="username is required"
    }
    if(!user.email){
        errors.email="email is required"
    } else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email="email is invalid"
    }
    if(!user.password){
        errors.password="password is required"
    } else if(user.password.length < 5){
        errors.password="password must be more than 5 characters"
    }

    return errors;
}
export default Validation;