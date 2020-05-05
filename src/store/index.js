import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const state = {
  //购物车列表
  goodLists: [],
  //购物车中商品件数
  goodsCount: 0,
  //购物车中每个商品的勾选情况
  YESorNo: [],
  //记录购物车全选框的状态
  allPointIsShow: true
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
  }
})
