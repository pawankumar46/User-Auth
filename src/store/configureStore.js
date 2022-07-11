import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import noteReducer from '../reducer/noteReducer'
import titleReducer from '../reducer/titleReducer'

const configureStore=()=>{
    const store = createStore(combineReducers({
         note : noteReducer ,
         title : titleReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore