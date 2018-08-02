import React, {Component} from 'react';
import {connect} from 'react-redux'

class Leaderboard extends Component {
    render () {
        return (
            <div className="container">
                <ul>
                    {this.props.users.map((user) => {
                        return (
                            <li key={user.id} className="user">
                                <img src={user.avatarURL} width="100" height="100"/>
                                <div>
                                    <h1>{user.name}</h1>
                                    <p>{user.answers} Answers</p>
                                    <p>{user.polls} Polls</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        users: Object.keys(users).map((id) => {
            const {name, avatarURL, answers, polls} = users[id]

            return {
                id,
                name,
                avatarURL,
                answers : answers.length,
                polls: polls.length
            }
        })
    }
}

export default connect(mapStateToProps)(Leaderboard)