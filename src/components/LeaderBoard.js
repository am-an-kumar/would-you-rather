import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const LeaderBoard = ({ users, leaders }) => (
  <ul>
    {leaders.map(leader => {
      const { name, id, avatarURL, asked, answered } = users[leader]
      return (
        <div key={id}>
          <p>{name}</p>
          <p>{avatarURL}</p>
          <p>{asked}</p>
          <p>{answered}</p>
        </div>
      )
    })}
  </ul>
)

const mapStateToProps = ({ users }) => {
  const topThree = Object.keys(users).sort(
    (firstUser, secondUser) =>
      secondUser.asked +
      secondUser.answered -
      (firstUser.asked + firstUser.answered),
  )
  return {
    users,
    leaders: topThree.slice(0, 3),
  }
}

LeaderBoard.propTypes = {
  users: PropTypes.object,
  leaders: PropTypes.array,
}

export default connect(mapStateToProps)(LeaderBoard)
