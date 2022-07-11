import React from 'react'
import AddForm from './AddForm'
import NotesList from './NotesList'
const MyNotes = (props) => {
  return (
    <div>
       <h2>
            parent compo 
       </h2>
        <AddForm  />
        <NotesList  />

    </div>
  )
}

export default MyNotes