import request from '@services'
import { LOADING, LOGIN } from '@redux/types/auth'

const login = data => {
  return {
    type: LOGIN,
    payload: data,
  }
}

const loading = data => {
  return {
    type: LOADING,
    payload: data,
  }
}

const loginAction = loginDetails => {
  return async dispatch => {
    try {
      // login code. And storing data in result variable
      dispatch(loading(true))
      const { data } = await request.post('/auth/login', loginDetails)
      const { user, token } = data

      dispatch(login({ user, token }))
      return true
    } catch (e) {
      dispatch(login(false))
      return e
    } finally {
      dispatch(loading(false))
    }
  }
}

export { loginAction }
