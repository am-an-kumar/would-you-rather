import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleReceiveAllUsers } from '../actions/users'
import { handleLogin } from '../actions/shared'

class Login extends Component {
  constructor(props) {
    super(props)
    this.selectRef = createRef()
  }

  handleLogin = event => {
    event.preventDefault()
    const selectElement = this.selectRef.current
    // passing the selected user's user id to handleLogin()
    this.props.dispatch(
      handleLogin(selectElement.options[selectElement.selectedIndex].value),
    )
  }

  componentDidMount() {
    this.props.dispatch(handleReceiveAllUsers())
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <h3>Select user to login</h3>
        <form>
          <select ref={this.selectRef}>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button type='submit' onClick={this.handleLogin}>
            Log in
          </button>
        </form>
      </div>
    )
  }
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

Login.propTypes = {
  users: PropTypes.array,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(Login)
