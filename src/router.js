var routes = [
    {
        path: 'pages/home/index',
        name: 'home',
        config: {
            navigationBarTitleText: '店铺主页',
            enablePullDownRefresh: true
          },
    },
    {
        path: 'pages/shop/index',
        name: 'shop',
        config: {
            navigationBarTitleText: '商品 分类',
            enablePullDownRefresh: true
          },
    },
    {
        path: 'pages/index/index',
        name: 'index',
        config: {
            navigationBarTitleText: '授权登录页',
            enablePullDownRefresh: false
        },
    },
    {
        path: 'pages/order/index',
        name: 'order',
        config: {
            navigationBarTitleText: '订单',
            enablePullDownRefresh: true
          },
    },
    {
        path: 'pages/my/index',
        name: 'my',
        config: {
            navigationBarTitleText: '我的',
            enablePullDownRefresh: false
          },
    },
    {
        path: 'pages/my/friend',
        name: 'myfriend',
        config: {
            navigationBarTitleText: '我的小伙伴',
            enablePullDownRefresh: false
          },
    },
    {
        path: 'pages/my/address',
        name: 'address',
        config: {
            navigationBarTitleText: '收货地址管理',
            enablePullDownRefresh: false
          },
    },
    {
        path: 'pages/my/addressadd',
        name: 'addressadd',
        config: {
            navigationBarTitleText: '新增收货地址',
            enablePullDownRefresh: false
          },
    },
    {
        path:'pages/shop/detail',
        name:'shopdetail',
        config: {
            navigationBarTitleText: '店铺详情',
            enablePullDownRefresh: false
        }
    },
    {
        path:'pages/shop/good-detail',
        name:'good-detail',
        config: {
            navigationBarTitleText: '商品详情',
            enablePullDownRefresh: false
        }
    },
    {
        path:'pages/order/settle',
        name:'settle',
        config: {
            navigationBarTitleText: '订单结算',
            enablePullDownRefresh: false
        }
    },
    {
        path:'pages/order/distribution',
        name:'distribution',
        config: {
            navigationBarTitleText: '物流选择',
            enablePullDownRefresh: false
        }
    },
    {
        path:'pages/order/pay',
        name:'pay',
        config: {
            navigationBarTitleText: '订单支付',
            enablePullDownRefresh: false
        },
    }
]
module.exports =routes
