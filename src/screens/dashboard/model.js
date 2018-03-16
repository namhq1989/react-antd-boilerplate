export default {
  namespace: 'dashboard',
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
