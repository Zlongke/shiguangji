import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Regist from '@/views/Regist'
import Jinnang from '@/views/Jinnang'
import Live from '@/views/Live'
import Message from '@/views/Message'
import Mine from '@/views/Mine'
import Time from '@/views/Time'

import Attention from '@/views/Attention'
import Afterattention from '@/views/Afterattention'
import Livecommon from '@/views/Livecommon'
import Community from '@/views/Community'
import Suproduct from '@/views/Suproduct'
import Babynecessary from '@/views/Babynecessary'
import Detail from '@/views/Detail'
import Clean from '@/views/Clean'
import Addcart from '@/views/Addcart'
import Buy from '@/views/Buy'
import Appraise from '@/views/Appraise'
import Minepublic from '@/views/Minepublic'
import Vipcenter from '@/views/Vipcenter'
import Makepicture from '@/views/Makepicture'
import Collect from '@/views/Collect'
import Cart from '@/views/Cart'
import Order from '@/views/Order'
import Coupon from '@/views/Coupon'

import Yunxiangce from '@/views/Yunxiangce'
import Chengzhangjilu from '@/views/Chengzhangjilu'
import Chengjiu from '@/views/Chengjiu'
import Qinyoutuan from '@/views/Qinyoutuan'






Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login',
      name: 'Index',
      component: Index,
      children: [{
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/regist',
          name: 'Regist',
          component: Regist
        },

      ]
    },
    // 登录注册结束
    {
      path: '/home',
      name: 'Home',
      redirect: '/jinnang',
      component: Home,
      children: [{
          path: '/jinnang',
          name: 'Jinnang',
          component: Jinnang
        },
  // 生活
        {

          path:'/live',
          redirect:'/attention',
          name:'Live',
          component:Live,
          children:[
            {
              path:'/attention',
              name:'Attention',
              component:Attention
            },
            {
              path:'/afterattention',
              name:'Afterattention',
              component:Afterattention
            },
             // 评价
            {
              path:'/appraise',
              name:'Appraise',
              component:Appraise
            },
          ]
         



        },
       

// 生活结束
        {
          path: '/message',
          name: 'Message',
          component: Message
        },
        {
          path: '/mine',
          name: 'Mine',
          component: Mine
        },
        {
          path: '/time',
          name: 'Time',
          component: Time
        },
      ]
    },


    // 生活社区
    {
      path:'/livecommon',
      redirect:'/community',
      name:'Livecommon',
      component:Livecommon,
      children:[
        {
          path:'/community',
          name:'Community',
          component:Community
        },
         {
          path:'/suproduct',
          name:'Suproduct',
          component:Suproduct
        },
        {
          path:'/babynecessary',
          name:'Babynecessary',
          component:Babynecessary
        },
        {
          path:'/clean',
          name:'Clean',
          component:Clean
        }

      ],
     

    },
  //  生活详情
  {
    path:'/detail',
    name:'Detail',
    component:Detail,
  },
  {
    path:'/addcart',
    name:'Addcart',
    component:Addcart
  },
  {
    path:'/buy',
    name:'Buy',
    component:Buy
  },

  {
    path:'/minepublic',
    redirect:'/vipcenter',
    name:'Minepublic',
    component:Minepublic,
    children:[
      {
        path:'/vipcenter',
        name:'Vipcenter',
        component:Vipcenter
      },
      {
        path:'/makepicture',
        name:'Makepicture',
        component:Makepicture
      },
      {
        path:'/collect',
        name:'Collect',
        component:Collect
      },
      {
        path:'/cart',
        name:'Cart',
        component:Cart
      },
      {
        path:'/order',
        name:'Order',
        component:Order
      },
      {
        path:'/coupon',
        name:'Coupon',
        component:Coupon
      },


    ]
  },


    {
      path: '/yunxiangce',
      name: 'Yunxiangce',
      component: Yunxiangce
    },
    {
      path: '/chengzhangjilu',
      name: ' Chengzhangjilu',
      component: Chengzhangjilu
    },
    {
      path: '/chengjiu',
      name: ' Chengjiu',
      component: Chengjiu
    },
    {
      path: '/qinyoutuan',
      name: ' Qinyoutuan',
      component: Qinyoutuan
    },

  ]
})
