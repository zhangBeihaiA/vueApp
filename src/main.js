import Vue from 'vue'
import App from './App.vue'
//element-ui
import { Button, MessageBox,Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
//引入路由器
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//三级联动注册为全局组件
//分页器注册为全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;

//测试
// import {reCategoryList} from '@/api'
// reCategoryList()
//引入仓库
import store from '@/store'

Vue.config.productionTip = false
//引入mockServe
import '@/mock/mockServe'
//引入Swiper样式
import "swiper/css/swiper.min.css";

//统一接口api文件里面全部请求函数
import * as API from '@/api'
import huitailang from '@/assets/worf.gif'
//lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: huitailang,
})
//自定义组件myplugins
import myPlugins from '@/plugins/myPlugins'
Vue.use(myPlugins,{
  name:'upper'
})

new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由
  router,
  //注册vuex的store对象  ==> 所有组件对象都有一个$store属性
  store
}).$mount('#app')
