export default {
  namespace: 'profile',
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
