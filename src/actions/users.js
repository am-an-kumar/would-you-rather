import { getAllUsers } from '../utils/api'

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users,
})

export const handleReceiveAllUsers = () => dispatch => {
  getAllUsers()
    .then(response => dispatch(receiveAllUsers(response)))
    .catch(() => console.error('Error occured'))
}
