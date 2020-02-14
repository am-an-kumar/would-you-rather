import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'
import { convertQuestionsToArray } from '../../utils/helpers'

const Questions = ({ questions }) => (
  <ul id='questions'>
    {convertQuestionsToArray(questions).map(question => (
      <Question {...question} key={question.id} />
    ))}
  </ul>
)

Questions.propTypes = {
  questions: PropTypes.object,
}

export default Questions
