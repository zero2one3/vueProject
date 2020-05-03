import {request} from "./request";

export function GetDetailDate(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}


export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.oldPrice = itemInfo.oldPrice
    this.newPice = itemInfo.price
    this.desc = itemInfo.desc
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.title = itemInfo.title
  }
}
