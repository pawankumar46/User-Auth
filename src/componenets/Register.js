import React,{useState} from 'react'
import validator from 'validator'

import axios from 'axios'


const Register = (props) => {
    const [username , setUserName]= useState('')
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
     const [formErrors , setFormErrors] = useState({})
     const errors ={}
    
     
    const runValidation=()=>{
       if(username.trim().length===0){
         errors.username ='enter your name'
       } 
       if(email.trim().length===0){
        errors.email ='enter email'
       }  else if (!validator.isEmail(email)){
        errors.email ='email is invalid'
       }
       if(password.trim().length===0){
        errors.password= 'enter proper password'
       }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
          runValidation()

          if(Object.values(errors).length===0){
             setFormErrors({})
             const formData ={
               username : username ,
               email : email ,
               password : password
             }
              console.log(formData)
              axios.post(`http://dct-user-auth.herokuapp.com/users/register` , formData )
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                alert('created user')
                props.history.push('/login')
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
     }
           else {
            setFormErrors(errors)
          }
    }
  return (
    <div>
        <h2>Register With Us</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label> <br/>
           <input type='text' 
           value={username} placeholder='enter your name..'
           onChange={(e)=>setUserName(e.target.value)}/> 
           {formErrors.username && <span>{formErrors.username}</span>}<br/>

           <label>Email</label> <br/>
           <input type='text' value={email} 
           placeholder='enter your email...'
           onChange={(e)=>setEmail(e.target.value)}/> 
           {formErrors.email && <span>{formErrors.email}</span>}<br/>

           <label>Password</label> <br/>
           <input type='text' value={password}
            placeholder='enter password' 
            onChange={(e)=>setPassword(e.target.value)}/>
            {formErrors.password && <span>{formErrors.password}</span>} <br/>

          <input type='submit' value='submit'/>

        </form>
    </div>
  )
}

export default Register