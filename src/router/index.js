import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Regist from '@/views/Regist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Login',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/Login',
          name:'Login',
          component:Login
        },
        {
          path:'/Regist',
          name:'Regist',
          component:Regist
        }
      ]
    },
    {
      path:'/Home',
      name:'Home',
      component:Home
    }
  ]
})
