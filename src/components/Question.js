import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'

// eslint-disable-next-line no-unused-vars
const Question = ({
  timestamp,
  optionOne,
  optionTwo,
  authorName,
  authorAvatarURL,
  authorId,
  authedUser,
}) => (
  <li className='question'>
    <div className='question-data'>
      <img src={authorAvatarURL} alt={`Avatar of ${name}`} className='avatar' />
      <div className='author-timestamp'>
        <span>{formatDate(timestamp)}</span>
        <p>
          <span className='author'>
            {authedUser === authorId ? 'You' : authorName}
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
}

const mapStateToProps = ({ users, authedUser }, props) => ({
  authedUser,
  authorId: users[props.author].id,
  authorName: users[props.author].name,
  authorAvatarURL: users[props.author].avatarURL,
})

export default connect(mapStateToProps)(Question)
