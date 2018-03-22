import lodash from 'lodash'
import { AppConst } from '../configs'

/**
 * Check string is ObjectId or not
 *
 * @param {String} id
 */
const isObjectId = (id) => {
  return AppConst.regex.objectId.test(id)
}

/**
 * Merge 2 objects
 *
 * @param {Object} obj1
 * @param {Object} obj2
 */
const mergeObjects = (obj1, obj2) => {
  return lodash.merge(obj1, obj2)
}


export default {
  isObjectId,
  mergeObjects
}
