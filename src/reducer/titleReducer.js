const initialTitle = [] 

const titleReducer=(state=initialTitle , action)=>{
    switch(action.type){
        
        case 'ADD_TITLE' : {
            return [{...action.payload} , ...state]
        }
        case 'DELETE' :{
            return state.filter((ele)=>{
                 return ele._id !== action.payload
            })
        }
        default : {
            return  state
        }
    }

}

export default titleReducer