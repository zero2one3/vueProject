import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

Vue.config.productionTip = false
//为Vue实例原型添加事件总线
Vue.prototype.$bus = new Vue()
//解决移动端300ms的点击延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


