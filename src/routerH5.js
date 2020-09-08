import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home/index'
import order from './pages/order/index'
import orderDetail from './pages/order/orderDetail'
import orderreturn from './pages/order/orderreturn'
import my from './pages/my/index'
import myfriend from './pages/my/friend'
import address from './pages/my/address'
import addressadd from './pages/my/addressadd'
import index from './pages/index/indexH5'
import shop from './pages/shop/index'
import shopgoods from './pages/shop/detail'
import settle from './pages/order/settle'
import distribution from './pages/order/distribution'
import logistics from './pages/order/logistics'
import pay from './pages/order/pay'


import store from './store'
Vue.use(Router)
var routes = [
    {
        path:'/',
        redirect:'pages/shop/index'
    },
    {
        path: 'pages/index/index',
        name: 'index',
        config: {
            navigationBarTitleText: '授权登录页',
            enablePullDownRefresh: true
        },
        meta: { noAuth: true },
        alias: '/pages/index/index',
        component: index
    },
    {
        path: 'pages/home/index',
        name: 'home',
        config: {
            navigationBarTitleText: '主页',
            enablePullDownRefresh: true,
            EnableNav:true,
        },
        alias: '/pages/home/index',
        component: home
    },
    {
        path: 'pages/order/index',
        name: 'order',
        config: {
            navigationBarTitleText: '订单',
            enablePullDownRefresh: true,
            EnableNav:true,
        },
        alias: '/pages/order/index',
        component: order
    },
    {
        path: 'pages/order/orderDetail',
        name: 'orderDetail',
        config: {
            navigationBarTitleText: '订单详情',
            enablePullDownRefresh: true,
            onReachBottomDistance: true,
            onReachBottomDistance: 50
          },
        alias: '/pages/order/orderDetail',
        component: orderDetail
    },
    {
        path: 'pages/order/orderreturn',
        name: 'orderreturn',
        config: {
            navigationBarTitleText: '售后服务',
          },
        alias: '/pages/order/orderreturn',
        component: orderreturn
    },
    {
        path: 'pages/my/index',
        name: 'my',
        config: {
            navigationBarTitleText: '我的',
            enablePullDownRefresh: true,
            EnableNav:true,

        },
        alias: '/pages/my/index',
        component: my
    },
    {
        path: 'pages/my/friend',
        name: 'myfriend',
        config: {
            navigationBarTitleText: '我的小伙伴',
            enablePullDownRefresh: false
          },
          alias: '/pages/my/friend',
          component: myfriend
    },
    {
        path: 'pages/my/address',
        name: 'address',
        config: {
            navigationBarTitleText: '收货地址管理',
            enablePullDownRefresh: false,
          },
          alias: '/pages/my/address',
          component: address
    },
    {
        path: 'pages/my/addressadd',
        name: 'addressadd',
        config: {
            navigationBarTitleText: '新增收货地址',
            enablePullDownRefresh: false
          },
          alias: '/pages/my/addressadd',
          component: addressadd
    },
    {
        path: 'pages/shop/index',
        name: 'shopindex',
        config: {
            navigationBarTitleText: '商品分类',
            enablePullDownRefresh: true,
            EnableNav:true,
        },
        alias: '/pages/shop/index',
        component: shop
    },
    {
        path:'pages/shop/detail',
        name:'shopgoods',
        config: {
            navigationBarTitleText: '商品详情',
            enablePullDownRefresh: false
        },
        alias: '/pages/shop/detail',
        component: shopgoods
    },    
    {
        path:'pages/order/settle',
        name:'settle',
        config: {
            navigationBarTitleText: '订单结算',
            enablePullDownRefresh: false
        },
        alias: '/pages/order/settle',
        component: settle
    },
    {
        path:'pages/order/distribution',
        name:'distribution',
        config: {
            navigationBarTitleText: '物流选择',
            enablePullDownRefresh: false
        },
        alias: '/pages/order/distribution',
        component: distribution
    },
    {
        path:'pages/order/pay',
        name:'pay',
        config: {
            navigationBarTitleText: '订单支付',
            enablePullDownRefresh: false
        },
        alias: '/pages/order/pay',
        component: pay
    }
]

let router =new Router({routes:routes})
router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.noAuth)) {
        //这里判断用户是否登录，验证store中的token是否已登录
        if (!store.getters.Logined) { // 判断当前的token是否存在
            next({
                path: '/pages/index/index',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
  })
export default router
