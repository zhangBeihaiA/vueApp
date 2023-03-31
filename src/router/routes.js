// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
    {
        path: '/center',
        component: Center,
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder,
                
            },
            {
                path:'groupOrder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myOrder'
            }

        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: '/pay',
        component: Pay,
        meta: { show: true },
        beforeEnter:(to,from,next)=>{
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/home',
        //懒加载 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
        component: ()=>import('@/pages/Home'),
        meta: { show: true }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        name: 'search',
        // props:true
        //对象
        // props:{a:1,b:2}
        //函数写法
        props: ($route) => {
            return { keyword: $route.params.keyword, k: $route.query.k }
        }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }

    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: '/trade',
        component: Trade,
        meta: { show: true },
        //路由独享守卫
        beforeEnter:(to,from,next)=>{
            //去交易页面必须是从购物车来
            if(from.path=='/shopcart'){
                next()
            }else{
                //停留到当前
                next(false)
            }
        }
    }
]