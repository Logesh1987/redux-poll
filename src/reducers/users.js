import {RECEIVE_USERS } from '../actions/user'
import {ADD_POLL, ADD_VOTE} from '../actions/poll'

export function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS : 
            return {
                ...state,
                ...action.users
            }
        case ADD_POLL : 
            const poll = action.poll;
            const {author, id} = poll;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    polls: state[author].polls.concat(id)
                }
            }
        case ADD_VOTE :
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers : [...state[action.authedUser].answers, action.id]
                }
            }
        default :
            return state
    }
}