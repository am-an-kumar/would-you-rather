import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
const Question = ({ id, author, timestamp, optionOne, optionTwo }) => (
  <div>
    <p>{author} asks</p>
    <ul>
      <li>{optionOne.text}</li>
      <li>{optionTwo.text}</li>
    </ul>
  </div>
)

Question.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number,
  optionOne: PropTypes.object,
  optionTwo: PropTypes.object,
}

export default Question
