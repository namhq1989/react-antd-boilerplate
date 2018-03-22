import { request } from '../../utils'
import { ApiConst } from '../../configs'

export async function getUserInfo(data) {
  const api = ApiConst.common.getUserInfo()
  return request.call(api.url, {
    method: api.method,
    body: data
  })
}
