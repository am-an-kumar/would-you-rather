import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleReceiveAllUsers } from '../actions/users'
import { handleLogin } from '../actions/shared'
import LoginCard from './LoginCard'

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveAllUsers())
  }

  loginHandler = (event, id) => {
    event.preventDefault()
    const { history, location, dispatch } = this.props

    // passing the selected user's user id to handleLogin()
    dispatch(handleLogin(id))
    if (location.state) {
      history.push(location.state.from)
    } else {
      history.push('/')
    }
  }

  render() {
    const { users } = this.props

    return (
      <div className='container'>
        <h1 id='welcome-heading'>would you rather ??</h1>
        <h3 id='welcome-message'>Select user profile to log in</h3>
        <ul id='login-cards-container'>
          {users.map(user => (
            <LoginCard
              {...user}
              key={user.id}
              loginHandler={this.loginHandler}
            />
          ))}
        </ul>
      </div>
    )
  }
}

Login.propTypes = {
  users: PropTypes.array,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
}

const mapStateToProps = ({ users }) => {
  const userDetails = []
  for (const user of Object.keys(users)) {
    const { id, name, avatarURL } = users[user]
    userDetails.push({
      id,
      name,
      avatarURL,
    })
  }
  return {
    users: userDetails,
  }
}

export default connect(mapStateToProps)(Login)
