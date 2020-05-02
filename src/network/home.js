import {request} from "./request";

export function GetHomeDate() {
  return request({
    url: '/home/multidata'
  })
}

export function GetHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
