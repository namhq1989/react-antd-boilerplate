import queryString from 'query-string'
import { routerRedux } from 'dva/router'
import { AppConst } from '../../configs'

export default {
  namespace: 'app',
  state: {
    user: null,
    locationPathname: '',
    locationQuery: {},
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search),
          }
        })
      })
    },
    setup({ dispatch }) {
      dispatch({ type: 'init' })
    }
  },

  effects: {
    * init({}, { put }) {
      // Do some stuff to init app (call api, check token, ...)
      const token = localStorage.getItem(AppConst.localStorage.authKey)
      if (token) {
        // Update state to models
        yield put({
          type: 'updateState',
          payload: {
            user: {
              name: 'Admin',
              role: 'admin',
              avatar: 'http://fanaru.com/the-simpsons/image/18510-the-simpsons-homer-simpson.png'
            }
          }
        })

        return yield put(routerRedux.push('/dashboard'))
      }

      return yield put(routerRedux.push('/login'))
    },

    * logout(data, { put }) {
      // Do some stuff (remove token, ...)
      localStorage.removeItem(AppConst.localStorage.authKey)

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
