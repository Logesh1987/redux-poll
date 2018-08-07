import {savePoll, savePollAnswer} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const  RECEIVE_POLLS   = 'RECEIVE_POLLS';
export const  ADD_POLL   = 'ADD_POLL';
export const ADD_VOTE = 'ADD_VOTE'
/* ACTIONS */
export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function addPoll (poll) {
    return {
        type: ADD_POLL,
        poll
    }
}
export function addVote(authedUser, id, answer) {
    return {
        type: ADD_VOTE,
        authedUser,
        id,
        answer
    }
}

/* ACTION CREATORS */
export function handleAddVote(id, answer) {
    return (dispatch, getState) => {
        const {authedUser, poll} = getState();
        dispatch(showLoading())
        return savePollAnswer({
            authedUser,
            id,
            answer
        })
        .then(() => (dispatch(addVote(authedUser, id, answer))))
        .then(() => dispatch(hideLoading()))
    }
}
export function handleAddPoll(poll, action) {
    return(dispatch, getState) => {     
        const {authedUser} = getState();
        dispatch(showLoading())
        return savePoll({
            ...poll,
            author: authedUser
        })
            .then((poll) => dispatch(addPoll(poll)))
            .then(() => dispatch(hideLoading()))
    }
}