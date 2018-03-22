const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH'
}

export default {
  methods: METHODS,
  common: {
    login: () => {
      return {
        url: '/login',
        method: METHODS.post
      }
    },
    getUserInfo: () => {
      return {
        url: '/users/me',
        method: METHODS.get
      }
    }
  },
  merchant: {
    all: () => {
      return {
        url: '/merchants',
        method: METHODS.get
      }
    }
  }
}
