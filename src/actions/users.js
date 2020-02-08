import { getAllUsers } from '../utils/api'

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users,
})

const setAuthedUser = authedUserId => ({
  type: SET_AUTHED_USER,
  authedUserId,
})

export const handleReceiveAllUsers = () => dispatch => {
  getAllUsers()
    .then(response => dispatch(receiveAllUsers(response)))
    .catch(() => console.error('Error occured'))
}

export const handleSetAuthedUser = authedUserId => setAuthedUser(authedUserId)
