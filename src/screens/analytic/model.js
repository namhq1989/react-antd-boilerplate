export default {
  namespace: 'analytic',
  state: {},

  subscriptions: {},

  effects: {},

  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}
