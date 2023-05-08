import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from '../router/index'
import less from 'less'
import ElementUI from 'element-ui'  // 导入ElementUI
import 'element-ui/lib/theme-chalk/index.css'  // 导入样式
Vue.use(ElementUI)
Vue.use(less)

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
 
new Vue({ // 创建一个 Vue 的根实例
  router,  // 将router写在这里
  render: h => h(App),
}).$mount('#app')