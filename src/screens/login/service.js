import { request } from '../../utils'
import { ApiConst } from '../../configs'

export async function login(data) {
  const api = ApiConst.common.login()
  return request.callOldServer(api.url, {
    method: api.method,
    body: data
  })
}
