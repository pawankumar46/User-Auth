import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { startGetUser } from '../action/noteAction'

const Account = (props) => {

 const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(startGetUser())
  },[dispatch])

    const user = useSelector((state)=>{
         return state.note
    })

  return (
    <div>
         <h2>Users Details</h2>
         <h2>Name = {user.username}</h2>
         <h3>Email = {user.email}</h3>
         <h3> _id = {user._id}</h3>

    </div>
  )
}

export default Account