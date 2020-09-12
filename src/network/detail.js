import {request} from "./request";

export function GetDetailDate(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function GetCommend() {
  return request({
    url: '/recommend'
  })
}

export class GoodsDate {
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

export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.cFans = shopInfo.cFans
  }
}

export class GoodsParams {
  constructor(itemParams) {
    this.image = itemParams.info.images ? itemParams.info.images[0] : ''
    this.infos = itemParams.info.set
    this.sizes = itemParams.rule.tables
  }
}
