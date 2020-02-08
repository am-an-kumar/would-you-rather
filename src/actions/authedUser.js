export const SET_AUTHED_USER = 'SET_AUTHED_USER'

const setAuthedUser = authedUser => ({
  type: SET_AUTHED_USER,
  authedUser,
})

export const handleSetAuthedUser = authedUser => setAuthedUser(authedUser)
