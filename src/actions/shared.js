import {getInitialData} from '../utils/api'
import {receiveUsers} from './user'
import {receivePolls} from './poll'
import {setAuthedUser} from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const AUTHED_ID = "tylermcginnis"

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, polls}) => {
                dispatch(receiveUsers(users))
                dispatch(receivePolls(polls))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}