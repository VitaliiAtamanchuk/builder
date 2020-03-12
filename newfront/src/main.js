import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import API from '@/plugins/api'
import { Collapse, CollapseItem, Tree } from 'element-ui'
import VJsoneditor from 'v-jsoneditor/src/index'

Vue.config.productionTip = false
Vue.use(API)
Vue.use(VJsoneditor)
Vue.component(Collapse.name, Collapse)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(Tree.name, Tree)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
