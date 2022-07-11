import React from 'react'
import FormNotes from './FormNotes'
import {useDispatch} from  'react-redux'
import { startTitle } from '../action/titleAction'

const AddForm = (props) => {
    
   const dispatch = useDispatch()

    const handleSubmission=(data)=>{
        dispatch(startTitle(data))
    }
  return (
    <div>
        <FormNotes  handleSubmission={handleSubmission}/>
    </div>
  )
}

export default AddForm