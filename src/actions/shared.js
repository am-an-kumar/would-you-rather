export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const logout = () => ({
  type: LOGOUT,
})

const login = authedUser => ({
  type: LOGIN,
  authedUser,
})

export const handleLogout = () => logout()
export const handleLogin = authedUser => login(authedUser)
