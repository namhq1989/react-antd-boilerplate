import { AppConst, RoleConst, MessageConst } from '../../configs'
import { notification } from '../../utils'
import { login } from './service'

export default {
  namespace: 'login',
  state: {},

  effects: {
    * login({ payload }, { call, put, select }) { // eslint-disable-line
      // Call api
      const data = yield call(login, payload)
      const response = data.data

      // Alert if login failed
      if (!response.success) {
        return notification.error(response.message)
      }

      const { user } = response.data
      const permittedRoles = Object.keys(RoleConst)

      if (!permittedRoles.includes(user.role)) {
        return notification.error(MessageConst.NoPermission)
      }

      // Save localStorage
      localStorage.setItem(AppConst.localStorage.authKey, response.data.token)
      localStorage.setItem(AppConst.localStorage.roleKey, user.role)

      // App init state
      yield put({ type: 'app/init' })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  }
}
