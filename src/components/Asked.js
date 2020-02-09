import React from 'react'
import PropTypes from 'prop-types'
import Questions from './Questions'

const Asked = ({ questions }) => <Questions questions={questions} />

Asked.propTypes = {
  questions: PropTypes.object,
}

export default Asked
