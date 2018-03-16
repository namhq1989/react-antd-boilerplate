const LocalStoragePrefix = (process.env.NODE_ENV === 'production') ? 'app-' : 'app-dev-'

export default {
  name: 'React - Antd - Boilerplate',

  endpoint: '...',

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
    authKey: `${LocalStoragePrefix}token`
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
