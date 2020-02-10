import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AuthorInfo from './AuthorInfo'
import OptionsWithStats from './OptionsWithStats'
import PollForm from './PollForm'

const QuestionPage = ({
  id,
  timestamp,
  author,
  optionOne,
  optionTwo,
  answer,
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
    <AuthorInfo
      timestamp={timestamp}
      authedUser={authedUser}
      authorName={authorName}
      authorId={author}
      authorAvatarURL={authorAvatarURL}
    />
    {author === authedUser || answer ? (
      <OptionsWithStats
        optionOne={optionOne}
        optionTwo={optionTwo}
        answer={answer}
      />
    ) : (
      <PollForm
        optionOneText={optionOne.text}
        optionTwoText={optionTwo.text}
        id={id}
        authedUser={authedUser}
      />
    )}
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
  answer: PropTypes.string,
}

export default connect(mapStateToProps)(QuestionPage)
