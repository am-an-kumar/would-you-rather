import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import Login from './Login'
import Main from './Main'
import PropTypes from 'prop-types'
import { Redirect, Switch, Route } from 'react-router-dom'

const App = ({ authedUser }) =>
  authedUser === null ? (
    <Switch>
      <Route path='/login' component={Login} />
      <Redirect to='/login' />
    </Switch>
  ) : (
    <Main />
  )

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

App.propTypes = {
  authedUser: PropTypes.string,
}

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(connect(mapStateToProps)(App))
