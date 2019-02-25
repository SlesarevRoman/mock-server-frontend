import Vue from 'vue'
// import { MdButton } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import router from './router'
import store from './store'
import TreeView from "vue-json-tree-view"

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(TreeView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


