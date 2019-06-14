import {combineReducers} from 'redux'
import selectReducer from './select'

export default combineReducers({
    select:selectReducer,    
})