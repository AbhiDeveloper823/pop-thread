import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import {userDrawerReducer} from './userDrawerReducer'

const rootReducer = combineReducers({
    user: userReducer,
    user_drawer: userDrawerReducer,
})

export default rootReducer