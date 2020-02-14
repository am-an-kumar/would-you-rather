import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthorInfo from './AuthorInfo'
import Options from './Options'

// renders the card for polls used in home page
const Question = ({
  id,
  timestamp,
  optionOne,
  optionTwo,
  authorName,
  authorAvatarURL,
  authorId,
  authedUser,
}) => (
  <li className='question'>
    <Link to={`/questions/${id}`}>
      <AuthorInfo
        timestamp={timestamp}
        authedUser={authedUser}
        authorName={authorName}
        authorId={authorId}
        authorAvatarURL={authorAvatarURL}
      />
      <Options optionOne={optionOne} optionTwo={optionTwo} />
    </Link>
  </li>
)

Question.propTypes = {
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

const mapStateToProps = ({ users, authedUser }, props) => ({
  authedUser,
  authorId: users[props.author].id,
  authorName: users[props.author].name,
  authorAvatarURL: users[props.author].avatarURL,
})

export default connect(mapStateToProps)(Question)
