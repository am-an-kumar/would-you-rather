import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'

const convertQuestionsToArray = questions => {
  const formattedQuestions = []
  for (const questionId of Object.keys(questions)) {
    formattedQuestions.push(questions[questionId])
  }
  return formattedQuestions
}

const Questions = ({ questions }) => (
  <ul>
    {convertQuestionsToArray(questions).map(question => (
      <Question {...question} key={question.id} />
    ))}
  </ul>
)

Questions.propTypes = {
  questions: PropTypes.object,
}

export default Questions
