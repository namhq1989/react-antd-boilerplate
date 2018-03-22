import MenuConst from './menu'

/**
 * Pick list menu ids from array of numbers
 *
 * @param {Array} array
 */
const pickId = (array) => {
  const ids = array.map((order) => {
    return MenuConst[order] ? MenuConst[order].id : null
  }).filter(id => id)
  return ids
}

export default {
  // All pages
  admin: {
    id: 'admin',
    pages: pickId([0, 1, 2])
  },

  // Analytic, profile
  sale: {
    id: 'sale',
    pages: pickId([1, 2])
  }
}
