import { getAllUsers } from '../utils/api'
import { toast } from 'react-toastify'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

// action creator
const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users,
})

// async action handler
export const handleReceiveAllUsers = () => dispatch => {
  dispatch(showLoading())
  getAllUsers()
    .then(response => {
      dispatch(receiveAllUsers(response))
      dispatch(hideLoading())
    })
    .catch(() => {
      dispatch(hideLoading())
      toast.error('Error occured')
    })
}
