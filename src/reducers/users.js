import { RECEIVE_ALL_USERS } from '../actions/users'

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users

    default:
      return state
  }
}

export default users
