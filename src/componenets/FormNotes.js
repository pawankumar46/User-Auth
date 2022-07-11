import React,{useState} from 'react'

const FormNotes = (props ) => {
     const {handleSubmission} = props
    const [title , setTitle] = useState('')
    const [body , setBody ] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
         
      const formData ={
        title : title ,
        body : body 
      }
       console.log(formData)
       handleSubmission(formData)

        setTitle('')
        setBody('')
    } 

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label> <br/>
           <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/>

            <label>Body</label> <br/>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} ></textarea> <br/>

            <input type='submit' value="submit"/>
        </form>
    </div>
  )
}

export default FormNotes