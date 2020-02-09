import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import Login from './Login'
import Home from './Home'
import PropTypes from 'prop-types'

const App = ({ authedUser }) => (authedUser === null ? <Login /> : <Home />)

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

App.propTypes = {
  authedUser: PropTypes.string,
}

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(connect(mapStateToProps)(App))
