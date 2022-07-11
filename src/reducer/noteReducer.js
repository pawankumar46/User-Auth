const initialNote =[]

const noteReducer =(state = initialNote , action)=>{
    switch(action.type){
        
         case 'GET_USER' : {
             return {...action.payload}
         }
        default : {
            return state
        }
    }
}
export default noteReducer