import {RECEIVE_POLLS, ADD_POLL, ADD_VOTE} from '../actions/poll'

export function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS : 
            return {
                ...state,
                ...action.polls
            }
        case ADD_POLL :
            return {
                ...state,
                [action.poll.id] : action.poll
            }
        case ADD_VOTE : 
            let votes = action.answer + 'Votes'
            return {
                ...state,    
                [action.id]: {
                    ...state[action.id],
                    [votes]:[...state[action.id][votes], action.authedUser]
                }
            }
        default :
            return state
    }
}