import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../actions/shared'

class Navbar extends Component {
  logoutHandler = () => {
    this.props.dispatch(handleLogout())
  }

  render() {
    const { id, name, avatarURL } = this.props
    return (
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/new'>New</NavLink>
        <NavLink to='/leaderboard'>Leaderboard</NavLink>
        <p>{id}</p>
        <p>{name}</p>
        <p>{avatarURL}</p>
        <button onClick={this.logoutHandler}>Logout</button>
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
}

export default connect(mapStateToProps)(Navbar)
