import {combineReducers} from 'redux'

// import counterReducers from './counterReducer'
import userReducer from './userReducer'


export default combineReducers({
    // counter: counterReducers,
    user: userReducer,
})