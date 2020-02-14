import React from 'react'
import PropTypes from 'prop-types'

const LoginCard = ({ id, name, avatarURL }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  <li className='login-card' tabIndex='0' id={id}>
    <img src={avatarURL} alt={name} className='login-card-avatar' />
    <p className='center login-card-name'>{name}</p>
  </li>
)

LoginCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
}

export default LoginCard
