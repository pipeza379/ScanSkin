import {combineReducers} from 'redux'
import selectReducer from './select'
import selectCompare from './compare'

export default combineReducers({
    select:selectReducer,
    compare:selectCompare,
})