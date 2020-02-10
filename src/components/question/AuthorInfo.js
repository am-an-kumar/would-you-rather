import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils/helpers'

const AuthorInfo = ({
  authedUser,
  timestamp,
  authorId,
  authorName,
  authorAvatarURL,
}) => (
  <>
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
  </>
)

AuthorInfo.propTypes = {
  timestamp: PropTypes.number,
  authorName: PropTypes.string,
  authorAvatarURL: PropTypes.string,
  authedUser: PropTypes.string,
  authorId: PropTypes.string,
}

export default AuthorInfo
