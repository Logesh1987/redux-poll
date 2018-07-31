import {getInitialData} from '../utils/api'
import {receiveUsers} from './user'
import {receivePolls} from './poll'
import {setAuthedUser} from './authedUser'

const AUTHED_ID = "tylermcginnis"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, polls}) => {
                dispatch(receiveUsers(users))
                dispatch(receivePolls(polls))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}