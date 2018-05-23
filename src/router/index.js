import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import audioTest from '@/pages/audio-test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/audio-test',
      name: 'audio-test',
      component: audioTest
    }
  ]
})
