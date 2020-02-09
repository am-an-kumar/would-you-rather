import React from 'react'
import PropTypes from 'prop-types'
import Questions from './Questions'

const UnAnswered = ({ questions }) => <Questions questions={questions} />

UnAnswered.propTypes = {
  questions: PropTypes.object,
}

export default UnAnswered
