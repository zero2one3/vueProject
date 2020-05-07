export default {
  //1.将商品添加到购物车
  addToCart(state, payload){
    state.goodLists.push(payload)
  },
  //2.为重复商品增加count
  addCount(state, payload){
    payload.count ++
  },
  //3.计算购物车中总商品数
  sumCount(state){
    state.goodsCount ++
  },
  //4.监听每个勾选框的点击，并在state中的YESorNo存储每个商品勾选框的状态
  changeYESorNo(state, payload){
    for(let i of state.YESorNo){
      if(i.index === payload){
        i.isShow = !i.isShow
      }
    }
  },
  //5.监听购物车全选的点击
  allPointsClick(state){
    state.allPointIsShow = !state.allPointIsShow
    for(let i of state.YESorNo){
      i.isShow = state.allPointIsShow
    }
  },
  //6.初始化每个购物车商品的勾选状态默认为勾选状态
  resetYESorNo(state){
    if(state.YESorNo.length < state.goodLists.length){
      for(let i = state.YESorNo.length; i<state.goodLists.length; i++){
        state.YESorNo.push({index:i, isShow: true})
      }
    }
  },
  //7.监听购物车全选框的实时状态
  allpointsisshow(state){
    let show = true
    for(let i of state.YESorNo){
      if(i.isShow === false){show = false}
    }
    state.allPointIsShow = show
  },
}
