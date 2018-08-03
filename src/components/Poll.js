import React, { Component } from 'react';
import {connect} from 'react-redux';

class Poll extends Component {
    constructor (props) {
        super(props)
        this.pollInfo = this.props.poll 
    }
    pollInfo = ""
    render () {
        const {question, aText, bText, cText, dText} = this.pollInfo 
        return (
            <div className="center poll-container">
                <h1>{question}</h1>
                <div className="poll-author">
                    BY <img src={this.props.avatarURL} />
                </div>
                <ul className="left">
                    <li className="option">{aText}</li>
                    <li className="option">{bText}</li>
                    <li className="option">{cText}</li>
                    <li className="option">{dText}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state, props) {
    let poll = state.polls[props.match.params.id]
    let {avatarURL} = state.users[poll.author]
    return {
        poll,
        avatarURL
    }
}

export default connect(mapStateToProps)(Poll)