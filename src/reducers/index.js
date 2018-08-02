import {polls} from './polls';
import {users} from './users'
import {authedUser} from './authedUser'
import {combineReducers} from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({polls, users, authedUser, loadingBar: loadingBarReducer})
