import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
          path: '',
          redirect: '/home'
        },
        //首页城市列表页
        {
          path: '/home',
          component: ()=>import("@/pages/home/Home")
        },
        //当前选择城市页
        {
          path: '/city/:cityid',
          component: ()=>import("@/pages/city/City")
        },
        //所有商铺列表页
        {
          path: '/msite',
          component: ()=>import("@/pages/msite/Msite"),
          meta: { keepAlive: true },
        },
        //特色商铺列表页
        {
          path: '/food',
          component: ()=>import("@/pages/food/Food")
        },
        //搜索页
        {
          path: '/search/:geohash',
          component: ()=>import("@/pages/search/Search")
        },
        //商铺详情页
        {
          path: '/shop',
          component: ()=>import("@/pages/shop/Shop"),
          children: [
            {
              path: 'foodDetail', //食品详情页
              component: ()=>import("@/pages/shop/children/FoodDetail"),
            }, 
            {
              path: 'shopDetail', //商铺详情页
              component: ()=>import("@/pages/shop/children/ShopDetail"),
              children: [
                {
                  path: 'shopSafe', //商铺安全认证页
                  component: ()=>import("@/pages/shop/children/children/ShopSafe"),
                }
              ]
            }
          ]
        },
        //确认订单页
        {
          path: '/confirmOrder',
          component: ()=>import("@/pages/confirmOrder/ConfirmOrder"),
          children: [
            {
              path: 'remark', //订单备注
              component: ()=>import("@/pages/confirmOrder/children/Remark"),
            }, 
            {
              path: 'invoice', //发票抬头
              component: ()=>import("@/pages/confirmOrder/children/Invoice"),
            }, 
            {
              path: 'payment', //付款页面
              component: ()=>import("@/pages/confirmOrder/children/Payment"),
            }, 
            {
              path: 'userValidation', //用户验证
              component: ()=>import("@/pages/confirmOrder/children/UserValidation"),
            }, 
            {
              path: 'chooseAddress', //选择地址
              component: ()=>import("@/pages/confirmOrder/children/ChooseAddress"),
              children: [
                {
                  path: 'addAddress', //添加地址
                  component: ()=>import("@/pages/confirmOrder/children/children/AddAddress"),
                  children: [
                    {
                      path: 'searchAddress', //搜索地址
                      component: ()=>import("@/pages/confirmOrder/children/children/children/SearchAddress"),
                    }
                  ]
                }
              ]
            }, 
          ]
        },
        //登录注册页
        {
          path: '/login',
          component: ()=>import("@/pages/login/Login")
        },
        //个人信息页
        {
          path: '/profile',
          component: ()=>import("@/pages/profile/Profile"),
          children: [
            {
              path: 'info', //个人信息详情页
              component: ()=>import("@/pages/profile/children/Info"),
              children: [
                {
                  path: 'setusername',
                  component: ()=>import("@/pages/profile/children/children/SetUsername"),
                },
                {
                  path: 'address',
                  component: ()=>import("@/pages/profile/children/children/Address"),     //编辑地址
                  children:[
                    {
                      path:'add',
                      component:()=>import("@/pages/profile/children/children/children/Add"),
                      children:[
                        {
                          path:'addDetail',
                          component:()=>import("@/pages/profile/children/children/children/children/AddDetail")
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              path: 'service', //服务中心
              component: ()=>import("@/pages/service/Service"),
            },
          ]
        },
        //修改密码页
        {
          path: '/forget',
          component: ()=>import("@/pages/forget/Forget")
        },
        //订单列表页
        {
          path: '/order',
          component: ()=>import("@/pages/order/Order"),
          children: [
            {
              path: 'orderDetail', //订单详情页
              component: ()=>import("@/pages/order/children/OrderDetail"),
            }, 
          ]
        },
        //vip卡页
        {
          path: '/vipcard',
          component: ()=>import("@/pages/vipcard/Vipcard"),
          children: [
            {
              path: 'invoiceRecord', //开发票
              component: ()=>import("@/pages/vipcard/children/InvoiceRecord"),
            }, 
            {
              path: 'useCart', //购买会员卡
              component: ()=>import("@/pages/vipcard/children/UseCart"),
            }, 
            {
              path: 'vipDescription', //会员说明
              component: ()=>import("@/pages/vipcard/children/VipDescription"),
            },
          ]
        },
        //发现页
        {
          path: '/find',
          component: ()=>import("@/pages/find/Find")
        },
        //下载页
        {
          path: '/download',
          component: ()=>import("@/pages/download/Download")
        },
        //服务中心
        {
          path: '/service',
          component: ()=>import("@/pages/service/Service"),
          children: [
            {
              path: 'questionDetail', //订单详情页
              component: ()=>import("@/pages/service/children/QuestionDetail"),
            }, 
          ]
        },
        //余额
        {
          path: 'balance',
          component: ()=>import("@/pages/balance/Balance"),
          children: [
            {
              path: 'detail', //余额说明
              component: ()=>import("@/pages/balance/children/Detail"),
            }, 
          ]
        },
        //我的优惠页
        {
          path: 'benefit',
          component: ()=>import("@/pages/benefit/Benefit"),
          children: [
            {
              path: 'coupon', //代金券说明
              component: ()=>import("@/pages/benefit/children/Coupon"),
            }, 
            {
              path: 'hbDescription', //红包说明
              component: ()=>import("@/pages/benefit/children/HbDescription"),
            }, 
            {
              path: 'hbHistory', //历史红包
              component: ()=>import("@/pages/benefit/children/Hbhistory"),
            }, 
            {
              path: 'exchange', //兑换红包
              component: ()=>import("@/pages/benefit/children/Exchange"),
            }, 
            {
              path: 'commend', //推荐有奖
              component: ()=>import("@/pages/benefit/children/Commend"),
            },
          ]
        },
        //我的积分页
        {
          path: 'points',
          component: ()=>import("@/pages/points/Points"),
          children: [
            {
              path: 'detail', //积分说明
              component: ()=>import("@/pages/points/children/Detail"),
            }, 
          ]
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
