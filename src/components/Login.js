import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleReceiveAllUsers } from '../actions/users'
import { handleLogin } from '../actions/shared'
import { TiUser } from 'react-icons/ti/index'

class Login extends Component {
  constructor(props) {
    super(props)
    this.selectRef = createRef()
  }

  handleLogin = event => {
    const { history, location } = this.props
    event.preventDefault()
    const selectElement = this.selectRef.current
    // passing the selected user's user id to handleLogin()
    this.props.dispatch(
      handleLogin(selectElement.options[selectElement.selectedIndex].value),
    )
    history.push(location.state.from)
  }

  componentDidMount() {
    this.props.dispatch(handleReceiveAllUsers())
  }

  render() {
    const { users } = this.props

    return (
      <div className='container'>
        <div className='login-container'>
          <h3 className='center'>Select user to login</h3>
          <TiUser
            fontSize='80px'
            color='red'
            style={{
              border: '1px solid red',
              borderRadius: '40px',
              backgroundColor: '#abc5df',
            }}
          />
          <form className='login-form'>
            <select ref={this.selectRef}>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button type='submit' className='btn' onClick={this.handleLogin}>
              Log in
            </button>
          </form>
        </div>
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
  history: PropTypes.object,
  location: PropTypes.object,
}

export default connect(mapStateToProps)(Login)
