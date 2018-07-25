import {polls} from './polls';
import {users} from './users'
import {authedUser} from './authedUser'
import {combineReducers} from 'redux'

export default combineReducers({polls, users, authedUser})
