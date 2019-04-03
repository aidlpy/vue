import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/firstPage',
      name: 'FirstPage',
      component: FirstPage
    }, {
      path: '/secondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
