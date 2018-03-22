import { ComponentConst, MessageConst } from '../../configs'
import { notification } from '../../utils'
import { fetch } from './service'

export default {
  namespace: 'merchant',
  state: {
    merchants: [],
    filter: {
      city: ComponentConst.common.cities.default,
      status: ComponentConst.merchant.statuses.default,
      keyword: '',
      total: 0,
      page: 0,
      limit: 20
    }
  },

  subscriptions: {},

  effects: {
    * fetch({ payload }, { call, put }) {
      const resp = yield call(fetch, payload)
      if (resp.err) {
        return notification.error(MessageConst.ServerError)
      }

      const { data } = resp.data
      yield put({
        type: 'updateState',
        payload: {
          merchants: data.merchants,
          filter: {
            total: data.total,
            limit: data.limitPerPage,
            ...payload
          }
        }
      })
    }
  },

  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}
