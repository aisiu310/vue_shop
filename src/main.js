import Vue from 'vue'
import App from './App.vue'
import { Button } from 'mint-ui'

import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import Split from './components/Split/Split.vue'
import store from './store'
import  './validate'
import './mock/mock-server'
import CartControl from './components/CartControl/CartControl.vue'

Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('Split', Split)
Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)

Vue.prototype.$eventBus = new Vue()
// 将store保存为Vue的属性
Vue.store = store

new Vue({
   el: '#app',
  render: h => h(App),
  router,
  store
})
