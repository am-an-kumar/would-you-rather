import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AuthorInfo from './AuthorInfo'
import OptionsWithStats from './OptionsWithStats'
import PollForm from './PollForm'

const QuestionPage = ({ question, authorDetails, authedUser }) => {
  if (!question) {
    return (
      <div id='missing-poll-error'>
        <p>Oops!!! We couldn&apos;t find the poll you are looking for.</p>
        <Link to='/'>{"Let's go home"}</Link>
      </div>
    )
  }

  const { id, timestamp, author, optionOne, optionTwo, answer } = question
  const { authorName, authorAvatarURL } = authorDetails

  return (
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
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const question = {
    ...questions.answered,
    ...questions.unAnswered,
    ...questions.asked,
  }[props.match.params.id]
  return {
    authedUser,
    question: question ? question : null,
    authorDetails: question ? users[question.author] : null,
  }
}

QuestionPage.propTypes = {
  question: PropTypes.object,
  authorDetails: PropTypes.object,
  authedUser: PropTypes.string,
}

export default connect(mapStateToProps)(QuestionPage)
