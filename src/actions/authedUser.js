export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER'

const setAuthedUser = authedUser => ({
  type: SET_AUTHED_USER,
  authedUser,
})

const unsetAuthedUser = () => ({
  type: UNSET_AUTHED_USER,
})

export const handleLogin = authedUser => setAuthedUser(authedUser)

export const handleLogout = () => unsetAuthedUser()
