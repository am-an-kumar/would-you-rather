import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import Login from './Login'
import Main from './Main'
import PropTypes from 'prop-types'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'

const App = props => {
  const { location, authedUser } = props
  return authedUser === null ? (
    <Switch>
      <Route path='/login' component={Login} />
      {/* will redirect to / or the page that was open prior to being redirected to login */}
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location ? location.pathname : '/' },
        }}
      />
    </Switch>
  ) : (
    <Main />
  )
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

App.propTypes = {
  authedUser: PropTypes.string,
  location: PropTypes.object,
}

export default hot(module)(withRouter(connect(mapStateToProps)(App)))
