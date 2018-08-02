import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddPoll} from '../actions/poll'
import LoadingBar from 'react-redux-loading-bar'
import {Route,  Redirect } from 'react-router';


class Addpoll extends Component {
    state = {
        question : '',
        a: '',
        b: '',
        c: '',
        d: '',
    }
    handleChange = (e) => {
        const {name, value} = e.target

        this.setState(() => {
            return {[name]: value}
        })
    }
    isDisabled = () => {
        const {question, a, b, c, d} = this.state;
        return question === '' || a === '' || b === '' || c === '' || d === '';
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddPoll(this.state))
            .then(() => {
                <Route exact path='/' render={() => {<Redirect to="/"/>}} />
                // <Redirect to="/"/>
            })
    }
    render () {
        const {question, a, b, c, d} = this.state;
        const saved = null;
        return (
            <div>
                <LoadingBar />
                <form className="add-form" onSubmit={this.handleSubmit}>
                    <h3>What is your question?</h3>
                    <input type="text" value={question} onChange={this.handleChange} name="question" className="input" />
                    <br/>
                    <hr/>
                    <br/>
                    <h3>What are the options?</h3>
                    <label className="label" htmlFor="input">A.</label>
                    <input type="text" value={a} onChange={this.handleChange} name="a" className="input" />
                    <label className="label" htmlFor="input">B.</label>
                    <input type="text" value={b} onChange={this.handleChange} name="b" className="input" />
                    <label className="label" htmlFor="input">C.</label>
                    <input type="text" value={c} onChange={this.handleChange} name="c" className="input" />
                    <label className="label" htmlFor="input">D.</label>
                    <input type="text" value={d} onChange={this.handleChange} name="d" className="input" />
                    <button className="btn" type="submit" disabled={this.isDisabled()}>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(Addpoll)