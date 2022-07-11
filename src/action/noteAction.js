
import axios from 'axios'

export const startGetUser=()=>{
     return (dispatch)=>{
        axios.get(`http://dct-user-auth.herokuapp.com/users/account` , {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
         .then((res)=>{
           const result = res.data
            dispatch(getUser(result))
         })
         .catch((err)=>{
            alert(err.message)
         })
     }
}

export const getUser=(data)=>{
    return {
        type: 'GET_USER',
        payload : data
    }
}