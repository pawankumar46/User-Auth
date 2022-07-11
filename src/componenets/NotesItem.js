import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { startDelete } from '../action/titleAction'

const NotesItem = (props) => {
    const {_id , title , body} = props 

     const dispatch= useDispatch()

   const handleRemove=()=>{
       const confirm = window.confirm('Are You Sure ??')
       if(confirm){
          dispatch(startDelete(_id))
       }
   }

  return (
    <div>
       <h3>{title} -- {body}</h3>
        <button onClick={()=>{
            handleRemove(_id)
        }}>X</button>
    </div>
  )
}

export default NotesItem