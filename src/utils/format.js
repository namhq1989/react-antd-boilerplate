import moment from 'moment'
import lodash from 'lodash'
import { AppConst } from '../configs'

// Format number
function number(value) {
  if (!value) {
    return '0'
  }
  if (typeof value === 'string') {
    value = parseFloat(value)
  }
  return Number(value.toFixed(1)).toLocaleString()
}

function abbreviateNumber(value) {
  let newValue = value
  if (value <= 10000000) {
    return this.number(newValue)
  } else {
    const suffixes = ['', 'k', 'm', 'b', 't']
    let suffixNum = 1
    if (value <= 999999999) {
      suffixNum = 2
    } else if (value >= 1000000000 && value <= 999999999999) {
      suffixNum = 3
    } else {
      suffixNum = 4
    }
    let shortValue = ''
    shortValue = Math.round(suffixNum !== 0 ? (value / (1000 ** suffixNum)) : value)
    if (shortValue === 1000 && suffixNum !== 4) {
      shortValue = 100
      suffixNum += 1
    }
    newValue = shortValue + suffixes[suffixNum]
    return newValue
  }
}

// Format date
function date(value) {
  if (!value) {
    return ''
  }

  return moment(value).format(AppConst.format.date)
}

// Format date with no hour value
function dateWithNoHour(value) {
  if (!value) {
    return ''
  }

  return moment(value).format(AppConst.format.dateWithNoHour)
}

// Format date with day/month only
function dateWithDayMonthOnly(value) {
  if (!value) {
    return ''
  }

  return moment(value).format(AppConst.format.dateWithDayMonthOnly)
}

function dateWithHour(value) {
  if (!value) {
    return ''
  }
  return moment(value).format(AppConst.format.dateWithHour)
}

function dateWithMinute(value) {
  if (!value) {
    return ''
  }
  return moment(value).format(AppConst.format.dateWithMinute)
}

// Phone number
function phone(value) {
  if (!value) {
    return ''
  }

  // Replace +84 to 0
  value = value.replace('+84', '0')

  // Reverse string
  value = value.split('').reverse().join('')

  // Add space to position 4 + 8
  value = `${value.substr(0, 3)} ${value.substr(3)}`
  value = `${value.substr(0, 7)} ${value.substr(7)}`

  // Reverse again
  value = value.split('').reverse().join('')

  return value
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
  if (!string) {
    return ''
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Get city text
function city(value) {
  const obj = lodash.find(AppConst.displayText.cities, item => item.id === value)
  return obj ? obj.text : 'N/A'
}

// Get gender text
function gender(value) {
  const obj = lodash.find(AppConst.displayText.genders, item => item.id === value)
  return obj ? obj.text : 'N/A'
}

// Substring by length
function substring(string, length = 120) {
  if (string.length > length) {
    string = `${string.substr(0, length - 3)}...`
  }
  return string
}

// Export
export default {
  number,
  abbreviateNumber,
  date,
  dateWithNoHour,
  dateWithDayMonthOnly,
  phone,
  capitalizeFirstLetter,
  city,
  gender,
  substring,
  dateWithHour,
  dateWithMinute
}
