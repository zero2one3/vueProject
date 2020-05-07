export default {
  //监听购物车中选中物品的总价
  sumPrice(state){
    let price = 0
    for(let i of state.YESorNo){
      if(i.isShow === true){
        price += (state.goodLists[i.index].price * 1) * state.goodLists[i.index].count
      }
    }
    //通过正则返回保留两位小数的总价
    let StrPrice = price + ''
    if(StrPrice.length === 0){return 0}
    else{
      if(/\.\d+/.exec(StrPrice) === null){return StrPrice + '.00'}
      else if(/\.\d+/.exec(StrPrice)[0].length === 2 ){return StrPrice + '0'}
      else if(/\.\d+/.exec(StrPrice)[0].length === 3 ){return StrPrice}
      else{return /\d+\.\d\d/.exec(StrPrice)[0]}
    }
  },
}
