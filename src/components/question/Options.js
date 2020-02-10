import React from 'react'
import PropTypes from 'prop-types'

const Options = ({ optionOne, optionTwo }) => (
  <ul className='options'>
    <li>{optionOne.text}</li>
    <li>{optionTwo.text}</li>
  </ul>
)

Options.propTypes = {
  optionOne: PropTypes.object,
  optionTwo: PropTypes.object,
}

export default Options
