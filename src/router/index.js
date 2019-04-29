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




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/login',
          name:'Login',
          component:Login
        },
        {
          path:'/regist',
          name:'Regist',
          component:Regist
        },

      ]
    },
    {
      path:'/home',
      name:'Home',
      redirect:'/jinnang',
      component:Home,
      children:[
        {
          path:'/jinnang',
          name:'Jinnang',
          component:Jinnang
        },
        {
          path:'/live',
          name:'Live',
          component:Live
        },
        {
          path:'/message',
          name:'Message',
          component:Message
        },
        {
          path:'/mine',
          name:'Mine',
          component:Mine
        },
        {
          path:'/time',
          name:'Time',
          component:Time
        },
      ]
    }
  ]
})
