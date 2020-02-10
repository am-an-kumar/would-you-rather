import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'

const OptionsWithStats = ({ optionOne, optionTwo, answer }) => (
  <ul className='options'>
    <li className={answer == 'optionOne' ? 'chosen-option' : ''}>
      <span className='option-text'>{optionOne.text}</span>
      <Stats favor={optionOne.votes} against={optionTwo.votes} />
    </li>
    <li className={answer == 'optionTwo' ? 'chosen-option' : ''}>
      <span className='option-text'>{optionTwo.text}</span>
      <Stats favor={optionTwo.votes} against={optionOne.votes} />
    </li>
  </ul>
)

OptionsWithStats.propTypes = {
  optionOne: PropTypes.object,
  optionTwo: PropTypes.object,
  answer: PropTypes.string,
}

export default OptionsWithStats
