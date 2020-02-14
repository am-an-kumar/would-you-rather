import React from 'react'
import PropTypes from 'prop-types'

// renders the options without stats. Is used in Home page in cards for polls
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
