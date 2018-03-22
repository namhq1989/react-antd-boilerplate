import { request } from '../../utils'
import { ApiConst } from '../../configs'

export async function fetch(data) {
  const api = ApiConst.merchant.all()
  return request.call(api.url, {
    method: api.method,
    body: data
  })
}
