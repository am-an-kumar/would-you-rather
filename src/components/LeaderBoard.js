import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const LeaderBoard = ({ users, leaders }) => (
  <ul id='leaderboard'>
    {leaders.map(leader => {
      const { name, id, avatarURL, asked, answered } = users[leader]
      return (
        <li key={id} className='leaderboard-entry'>
          <div className='info'>
            <div className='personal'>
              <p>{name}</p>
              <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
              />
            </div>
            <div className='stats'>
              <p>Asked: {asked}</p>
              <p>Answered: {answered}</p>
            </div>
          </div>
          <div className='score'>
            <p>Score</p>
            <p>{asked + answered}</p>
          </div>
        </li>
      )
    })}
  </ul>
)

const mapStateToProps = ({ users }) => {
  const leaders = Object.keys(users).sort(
    (firstUser, secondUser) =>
      secondUser.asked +
      secondUser.answered -
      (firstUser.asked + firstUser.answered),
  )
  return {
    users,
    leaders,
  }
}

LeaderBoard.propTypes = {
  users: PropTypes.object,
  leaders: PropTypes.array,
}

export default connect(mapStateToProps)(LeaderBoard)
