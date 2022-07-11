import  axios from 'axios'

export const  startTitle=(data)=>{
 return(dispatch)=>{
    axios.post(`http://dct-user-auth.herokuapp.com/api/notes` , data , {
        headers : {
            'x-auth'  : localStorage.getItem('token')
        }
    })
    .then((res)=>{
      const result = res.data 
       dispatch(addTitle(result))
    })
    .catch((err)=>{
      alert(err.message)
    })
 }
} 

export const addTitle=(data)=>{
   return {
     type : 'ADD_TITLE',
     payload : data
   }
}

export const startDelete=(id)=>{
    return(dispatch)=>{
      axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}` , {
        headers : {
            'x-auth'  : localStorage.getItem('token')
        }
      })
       .then((res)=>{
        const result = res.data
         if(result.hasOwnProperty('errors')){
            alert(result.errors)
         } else {
             dispatch(deleteTitle(id))
         }
       })
       .catch((err)=>{
        alert(err.message)
       })
    }
} 

export const deleteTitle=(id)=>{
    return {
        type : 'DELETE',
        payload : id
    }
}