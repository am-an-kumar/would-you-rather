import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AuthorInfo from './AuthorInfo'
import OptionsWithStats from './OptionsWithStats'
import PollForm from './PollForm'

const QuestionPage = ({ question, authorDetails, authedUser, loading }) => {
  // to make sure that for initial polls, the missing error is not shown prior to the details being fetched. Can be replaced by a Loading component
  if (loading) {
    return null
  }

  if (!question) {
    return (
      <div id='missing-poll-error'>
        <p>Oops!!! We couldn&apos;t find the poll you are looking for.</p>
        <Link to='/'>{"Let's go home"}</Link>
      </div>
    )
  }

  const { id, timestamp, author, optionOne, optionTwo, answer } = question
  const { name, avatarURL } = authorDetails

  return (
    <div className='container'>
      <div
        className='question'
        style={{
          padding: '10px',
        }}
      >
        <AuthorInfo
          timestamp={timestamp}
          authedUser={authedUser}
          authorName={name}
          authorId={author}
          authorAvatarURL={avatarURL}
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
    </div>
  )
}

const mapStateToProps = (
  { questions, users, authedUser, loadingBar },
  props,
) => {
  const question = {
    ...questions.answered,
    ...questions.unAnswered,
    ...questions.asked,
  }[props.match.params.id]
  return {
    authedUser,
    question: question ? question : null,
    authorDetails: question ? users[question.author] : null,
    loading: loadingBar.default === 1,
  }
}

QuestionPage.propTypes = {
  question: PropTypes.object,
  authorDetails: PropTypes.object,
  authedUser: PropTypes.string,
  loading: PropTypes.bool,
}

export default connect(mapStateToProps)(QuestionPage)
