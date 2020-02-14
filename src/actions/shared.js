// actions
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

// action creators
const logout = () => ({
  type: LOGOUT,
})

const login = authedUser => ({
  type: LOGIN,
  authedUser,
})

// action handlers
export const handleLogout = () => logout()
export const handleLogin = authedUser => login(authedUser)
