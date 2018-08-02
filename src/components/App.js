import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading-bar'
import Leaderboard from './Leaderboard'
import Addpoll from './Addpoll'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <div className="nav">              
              <ul className="center">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/leaderboard'>Leaderboard</Link></li>
                <li><Link to='/addpoll'>Add Poll</Link></li>
              </ul>
              <hr />
            </div>
              {
                this.props.loading ?
                <LoadingBar /> :
                <Route exact path='/' component={Dashboard} />
              }
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/addpoll' component={Addpoll} />
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)