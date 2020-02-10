import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { formatDate } from '../../utils/helpers'

const QuestionPage = ({
  timestamp,
  author,
  optionOne,
  optionTwo,
  authorName,
  authorAvatarURL,
  authedUser,
}) => (
  <div
    className='question'
    style={{
      padding: '10px',
    }}
  >
    <div className='question-data'>
      <img src={authorAvatarURL} alt={`Avatar of ${name}`} className='avatar' />
      <div className='author-timestamp'>
        <span>{formatDate(timestamp)}</span>
        <p>
          <span className='author'>
            {authedUser === author ? 'You' : authorName}
          </span>
          <span>&nbsp; asked</span>
        </p>
      </div>
    </div>
    <p className='would-you-rather'>Would you rather</p>
    <ul className='options'>
      <li>{optionOne.text}</li>
      <li>{optionTwo.text}</li>
    </ul>
  </div>
)

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const question = {
    ...questions.answered,
    ...questions.unAnswered,
    ...questions.asked,
  }[props.match.params.id]
  const authorDetails = users[question.author]
  return {
    ...question,
    authorName: authorDetails.name,
    authorAvatarURL: authorDetails.avatarURL,
    authedUser,
  }
}

QuestionPage.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number,
  optionOne: PropTypes.object,
  optionTwo: PropTypes.object,
  authorName: PropTypes.string,
  authorAvatarURL: PropTypes.string,
  authedUser: PropTypes.string,
  authorId: PropTypes.string,
}

export default connect(mapStateToProps)(QuestionPage)
