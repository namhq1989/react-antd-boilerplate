import { AppConst } from '../configs'

/**
 * Check string is ObjectId or not
 * @param {String} id
 */
function isObjectId(id) {
  return AppConst.regex.objectId.test(id)
}

export default { isObjectId }
