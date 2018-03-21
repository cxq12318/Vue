import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Sort from '../pages/Sort/Sort.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'
import Brand from '../pages/Brand/Brand.vue'
import Category from '../pages/Category/Category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/sort',
      component:Sort,
      children: [
        {
          path:'category',
          component:Category,
          meta:{
            showFooter:true
          }
        },
        {
          path:'brands',
          component:Brand,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/',
          redirect:'category'
        }
      ]
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
