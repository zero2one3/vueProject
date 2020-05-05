export default {
  //1.详情页点击‘加入购物车’
  addGoods(context, payload) {
    //判断是否添加相同物品到购物车中
    let isRepeat = false
    for (let i of context.state.goodLists) {
      if (i.iid === payload.iid) {
        context.commit('addCount', i)
        context.commit('sumCount')
        isRepeat = true
      }
    }
    if (isRepeat === false) {
      context.commit('addToCart', payload)
      context.commit('sumCount')
    }
  }
}
