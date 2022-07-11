import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import NotesItem from './NotesItem'

const NotesList = (props) => {

    const title = useSelector((state)=>{
         return state.title
    })
  return (
    <div>
        {title.length===0 ? (
            <>
             <h3>No Notes Found</h3>
             <p>Add Your First Task</p>
            
            </>
        ): (
          <>
            <h3>Total Notes = {title.length}</h3>
            {title.map((ele)=>{
                return  <NotesItem key={ele._id} {...ele}  />
            })}
          </>

        )}
    </div>
  )
}

export default NotesList