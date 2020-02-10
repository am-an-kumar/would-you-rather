import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleReceiveAllUsers } from '../actions/users'

class LeaderBoard extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveAllUsers())
  }

  render() {
    const { users, leaders } = this.props
    return (
      <ul id='leaderboard'>
        {leaders.map((leader, index) => {
          const { name, id, avatarURL, asked, answered } = users[leader]
          return (
            <li key={id} className='leaderboard-entry'>
              <div className='info'>
                <div className='user'>
                  <div className='personal'>
                    <img
                      src={avatarURL}
                      alt={`Avatar of ${name}`}
                      className='avatar'
                    />
                    <p>{name}</p>
                  </div>
                  <p className='rank'>{index < 3 ? `#${index + 1}` : ''}</p>
                </div>
                <div className='stats'>
                  <div className='asked-answered'>
                    <p>Asked: {asked}</p>
                    <p>Answered: {answered}</p>
                  </div>
                  <div className='score'>
                    <span>Score</span>
                    <span className='value'>{asked + answered}</span>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const leaders = Object.keys(users).sort(
    (firstUser, secondUser) =>
      users[secondUser].asked +
      users[secondUser].answered -
      (users[firstUser].asked + users[firstUser].answered),
  )
  return {
    users,
    leaders,
  }
}

LeaderBoard.propTypes = {
  users: PropTypes.object,
  leaders: PropTypes.array,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(LeaderBoard)
