import React , {useState} from 'react'
import axios from 'axios'
const Login = (props) => {
   const {handleAuth} = props
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')


   const handleSubmit=(e)=>{
       e.preventDefault()

        const data ={ 
           email : email  ,
           password : password
         }
         axios.post(`http://dct-user-auth.herokuapp.com/users/login` , data)
          .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
              alert(result.errors)
            } else{
              alert('user logged in')
              localStorage.setItem('token' , result.token)
              props.history.push('/')
                handleAuth()
            }
          })
          .catch((err)=>{
            alert(err.message)
          }
          )
   }
  return (
    <div>
         <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type ="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/>

            <label>Password</label>
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <input  type='submit' value='submit'/>

          </form>
    </div>
  )
}

export default Login