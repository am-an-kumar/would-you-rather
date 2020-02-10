import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Home from './Home'
import New from './New'
import LeaderBoard from './LeaderBoard'
import { handleReceiveAllQuestions } from '../actions/questions'

class Main extends Component {
  componentDidMount() {
    const { dispatch, authedUser } = this.props
    dispatch(handleReceiveAllQuestions(authedUser))
  }

  render() {
    return (
      <>
        <Navbar />
        <div id='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={New} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Redirect to='/' />
          </Switch>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

Main.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
}

export default connect(mapStateToProps)(Main)
