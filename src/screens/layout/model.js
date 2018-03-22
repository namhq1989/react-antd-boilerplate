import queryString from 'query-string'
import { routerRedux } from 'dva/router'
import { AppConst, RoleConst } from '../../configs'
import { notification } from '../../utils'
import { getUserInfo } from './service'

export default {
  namespace: 'app',
  state: {
    user: null,
    locationPathname: '',
    locationQuery: {}
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search)
          }
        })
      })
    },
    setup({ dispatch }) {
      dispatch({ type: 'init' })
    }
  },

  effects: {
    * init({}, { put, call, select }) {
      // Get token saved in storage
      const token = localStorage.getItem(AppConst.localStorage.authKey)
      const role = localStorage.getItem(AppConst.localStorage.roleKey)

      // If have no token, redirect to login page
      if (!token || !role || role === 'undefined') {
        localStorage.removeItem(AppConst.localStorage.authKey)
        localStorage.removeItem(AppConst.localStorage.roleKey)
        return yield put(routerRedux.push('/login'))
      }

      const { locationPathname } = yield select(_ => _.app)

      // Get user info
      const data = yield call(getUserInfo)
      const response = data.data

      // Alert if login failed
      if (!response.success) {
        return notification.error(response.message)
      }

      const { user } = response.data

      // Write user current role to storage, for redirect to exact page
      localStorage.setItem(AppConst.localStorage.roleKey, user.role)

      // Update state to models
      yield put({
        type: 'updateState',
        payload: {
          user
        }
      })

      // Push to page based to role
      // TODO: check deeper for regex url (include id)
      if (!RoleConst[user.role].pages.includes(locationPathname.substring(1))) {
        yield put(routerRedux.push(RoleConst[user.role].pages[0]))
      }
    },

    * logout(data, { put }) {
      // Do some stuff (remove token, ...)
      localStorage.removeItem(AppConst.localStorage.authKey)
      localStorage.removeItem(AppConst.localStorage.roleKey)

      yield put({
        type: 'updateState',
        payload: {
          user: null
        }
      })

      // Redirect to login page
      window.location.href = '/login'
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
