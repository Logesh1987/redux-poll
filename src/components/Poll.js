import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPercentage} from '../utils/helpers';
import {handleAddVote} from '../actions/poll';

const getTotalKeys = () => (['aVotes', 'bVotes', 'cVotes', 'dVotes'])

class Poll extends Component {
    handleVote = (answer) => {
        this.props.dispatch(handleAddVote(
            this.props.poll.id,
            answer
        ))
    }
    render () {
        if(this.props.poll === null) 
            return <div className="center"><br/><br/>THIS POLL DOESN'T EXISTS</div>

        const {poll, vote} = this.props;
        const totalVotes = getTotalKeys().reduce((acc, key) => {
            return acc + poll[key].length
        }, 0)

        return (
            <div className="center poll-container">
                <h1>{poll.question}</h1>
                <div className="poll-author">
                    BY <img src={this.props.avatarURL} />
                </div>
                <ul>
                    {['aText', 'bText', 'cText', 'dText'].map((key, id) => {
                            const count = poll[key[0] + 'Votes'].length;
                            const chosen = key[0] === vote;
                            return (
                                <li onClick={() => {
                                    if(vote === null) {this.handleVote(key[0])}
                                }} className={chosen ? "option chosen" : "option"} key={id}>
                                    {
                                        vote === null ?
                                        <span>{poll[key]}</span> :
                                        <div className="right">
                                            <span className="floatLeft">{poll[key]}</span>
                                            <span>{getPercentage(count, totalVotes)}% votes</span>
                                            <span>({count})</span>
                                        </div>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, polls, users}, props) {
    let poll = polls[props.match.params.id]

    if(!poll) {
        return {poll : null}
    }
    
    let {avatarURL} = users[poll.author]
    const vote = getTotalKeys().reduce((vote, key) => {
        if (vote !== null) {
            return vote[0]
        }

        return poll[key].includes(authedUser)
        ? key
        : vote
        
    }, null)

    return {
        poll,
        vote,
        authedUser,
        avatarURL
    }
}

export default connect(mapStateToProps)(Poll)