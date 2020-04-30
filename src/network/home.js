import {request} from "./request";

export function GetHomeDate() {
  return request({
    url: '/home/multidata'
  })
}
