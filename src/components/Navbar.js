import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaSignOutAlt } from 'react-icons/fa/index'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { handleLogout } from '../actions/shared'

class Navbar extends Component {
  logoutHandler = () => {
    this.props.dispatch(handleLogout())
    this.props.history.push('/login')
  }

  render() {
    const { name, avatarURL } = this.props
    return (
      <nav id='nav'>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <img src={avatarURL} alt={`Avatar of ${name}`} className='avatar' />
            <FaSignOutAlt
              className='sign-out-icon'
              onClick={this.logoutHandler}
            />
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const { id, name, avatarURL } = users[authedUser]
  return {
    id,
    name,
    avatarURL,
  }
}

Navbar.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatarURL: PropTypes.string,
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

export default withRouter(connect(mapStateToProps)(Navbar))
