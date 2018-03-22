const LocalStoragePrefix = (process.env.NODE_ENV === 'production') ? 'crm-' : 'crm-dev-'

export default {
  name: 'React - Antd - Boilerplate',

  endpoint: 'http://127.0.0.1:5020',
  // endpoint: 'https://api.zody.vn',

  oldEndpoint: 'http://127.0.0.1:5005',
  // oldEndpoint: 'https://api.zody.vn',

  // Screen size
  screens: {
    'xs-max': 480,
    'sm-min': 481,
    'sm-max': 767,
    'md-min': 768,
    'md-max': 991,
    'lg-min': 992,
    'lg-max': 1199,
    'xl-min': 1200
  },

  // Local storage
  localStorage: {
    authKey: `${LocalStoragePrefix}token`,
    roleKey: `${LocalStoragePrefix}role`
  },

  // Notification level
  notification: {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info'
  },

  // Regex
  regex: {
    email: /\S+@\S+\.\S+/,
    objectId: /^[0-9a-fA-F]{24}$/
  },

  // Format
  format: {
    date: 'DD/MM/YYYY, HH:mm',
    dateWithNoHour: 'DD/MM/YYYY',
    dateWithDayMonthOnly: 'DD/MM',
    dateWithHour: 'H',
    dateWithMinute: 'm'
  },

  // App colors
  colors: {
    app: '#F60',

    // Common
    white: '#fff',
    black: '#000'
  }
}
