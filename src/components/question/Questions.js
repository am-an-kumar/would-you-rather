import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'

// formats questions based on timestamp, latest ones come first
const convertQuestionsToArray = questions => {
  const sortedQuestions = Object.keys(questions).sort(
    (question1, question2) =>
      questions[question2].timestamp - questions[question1].timestamp,
  )
  const formattedQuestions = []
  for (const questionId of sortedQuestions) {
    formattedQuestions.push(questions[questionId])
  }
  return formattedQuestions
}

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
