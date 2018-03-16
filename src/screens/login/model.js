import { routerRedux } from 'dva/router'
import { AppConst } from '../../configs'

export default {
  namespace: 'login',
  state: {},

  effects: {
    * login({ payload }, { call, put, select }) { // eslint-disable-line
      const { locationQuery } = yield select(_ => _.app)
      const { from } = locationQuery

      // Call api
      // const data = yield call(login, payload)

      // Response
      // const response = data.data

      // Do some stuff like check role, save storage, ...
      // ...

      // Save localStorage
      localStorage.setItem(AppConst.localStorage.authKey, 'user-token')

      // App init state
      yield put({ type: 'app/init' })

      // Redirect
      if (from && from !== '/login') {
        yield put(routerRedux.push(from))
      } else {
        yield put(routerRedux.push('/dashboard'))
      }
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
