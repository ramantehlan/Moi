import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Home from '@/routes/home'

// Fallback page
import PageNotFound from '@/routes/errorPages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
