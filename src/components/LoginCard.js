import React from 'react'
import PropTypes from 'prop-types'

const LoginCard = ({ id, name, avatarURL, loginHandler }) => (
  <li
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    role='button'
    className='login-card'
    tabIndex='0'
    onClick={event => loginHandler(event, id)}
    onKeyDown={({ key }) =>
      key === 'Enter' ? loginHandler(event, id) : undefined
    }
  >
    <img src={avatarURL} alt={name} className='login-card-avatar' />
    <p className='center login-card-name'>{name}</p>
  </li>
)

LoginCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  loginHandler: PropTypes.func.isRequired,
}

export default LoginCard
