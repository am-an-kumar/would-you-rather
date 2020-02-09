import React from 'react'
import PropTypes from 'prop-types'
import Questions from './Questions'

const Answered = ({ questions }) => <Questions questions={questions} />

Answered.propTypes = {
  questions: PropTypes.object,
}

export default Answered
