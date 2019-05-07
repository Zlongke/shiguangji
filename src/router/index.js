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
import Yunxiangce from '@/views/Yunxiangce'
import Chengzhangjilu from '@/views/Chengzhangjilu'
import Chengjiu from '@/views/Chengjiu'
import Qinyoutuan from '@/views/Qinyoutuan'
import shipu from '@/views/shipu'
import eat from '@/views/eat'
import eatone from '@/views/eatone'
import jiuniang from '@/views/jiuniang'
import yyshipu from '@/views/yyshipu'
import wdshoucang from '@/views/wdshoucang'
import messageone from '@/views/messageone'
import baike from '@/views/baike'
import wenda from '@/views/wenda'
import yyshipu2 from '@/views/yyshipu2'
import fenlei from '@/views/fenlei'
import feilei2 from '@/views/feilei2'






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
        {
          path: '/live',
          name: 'Live',
          component: Live
        },
        {
          path: '/shipu',
          name: 'Shipu',
          component: shipu
        },

        {
          path: '/eat',
          name: 'Eat',
          component: eat
        },

        {
          path: '/wdshoucang',
          name: 'Wdshouchang',
          component:wdshoucang
        },
        {
          path: '/eatone',
          name: 'Eatone',
          component: eatone
        },
        {
          path: '/jiuniang',
          name: 'Jiuniang',
          component:jiuniang
        },

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
    {
      path: '/messageone',
      name: 'Messageone',
      component: messageone
    },
    {
      path: '/baike',
      name: 'Baike',
      component:baike
    },
    {
      path: '/wenda',
      name: 'Wenda',
      component:wenda
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
      path: '/yyshipu',
      name: 'Yyshipu',
      component:yyshipu
    },
    {
      path: '/qinyoutuan',
      name: ' Qinyoutuan',
      component: Qinyoutuan
    },
    {
      path: '/yyshipu2',
      name: ' Yyshipu2',
      redirect: '/fenlei',
      component: yyshipu2,
        children: [
          {
          path: '/fenlei',
          name: ' Fenlei',
          component:fenlei,
        },
        {
          path: '/feilei2',
          name: ' Feilei2',
          component:feilei2,
        },
      ]
    },
  ]
})
