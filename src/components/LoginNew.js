import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleReceiveAllUsers } from '../actions/users'
import { handleLogin } from '../actions/shared'
import LoginCard from './LoginCard'

class LoginNew extends Component {
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
        <h1
          className='center'
          style={{
            backgroundColor: '#caca61c4',
            margin: '0',
            color: '#0e3357',
            width: '100%',
            padding: '10px',
          }}
        >
          Welcome to would you rather
        </h1>
        <h3
          className='center'
          style={{
            color: '#0e3357',
          }}
        >
          Select user to log in
        </h3>
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

LoginNew.propTypes = {
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

export default connect(mapStateToProps)(LoginNew)
