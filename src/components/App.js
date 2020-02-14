import React from 'react'
import { connect } from 'react-redux'
import LoginNew from './LoginNew'
import Main from './Main'
import PropTypes from 'prop-types'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'

const App = props => {
  const { location, authedUser } = props
  return authedUser === null ? (
    <Switch>
      <Route path='/login' component={LoginNew} />
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

export default withRouter(connect(mapStateToProps)(App))
