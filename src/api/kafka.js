import request from '@/utils/request'
export function getdata(data) {
  return request({
    url: '/data',
    method: 'get',
    data
  })
}
