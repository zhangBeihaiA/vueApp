//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
//使用插件
Vue.use(VueRouter)
//引入store
import store from '@/store'

let router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
  }
})
//全局守卫，前置守卫
router.beforeEach(async (to, from, next) => {
  next()
  //用户登录才会有token
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    //用户登录了还想去login
    if (to.path == '/login') {
      next('/')
      // console.log(111)
    } else {
      //如果用户名已有
      if (name) {
        next()
        // console.log(222)
      } else {
        try {
          //登录了没有用户信息
          //获取用户名
          await store.dispatch('getUserInfo')
          //再放行
          next()
          // console.log(333)
        } catch (error) {
          //token失效了
          //清除token
          await store.dispatch('userLoginOut')
          next('/login')
          


        }
      }
 
    }
  } else {
    //未登录 不能去支付相关 交易相关 个人中心
    let toPath = to.path
    if(toPath.indexOf('/trade')!==-1 || toPath.indexOf('/pay')!==-1 || toPath.indexOf('/center')!==-1){
      //未登录来的时候后的路由信息存储在地址栏中
      next('/login?redirect='+toPath)
      // next('/login?redirect='+toPath)
    }else{
      next()
    }
  }
})


export default router