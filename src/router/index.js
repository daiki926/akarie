import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Biography from '@/components/Biography'
import Notes from '@/components/Notes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
           
           {
           path: '/Biography',
           name: 'Biography',
           component: Biography
           },
           
           {
           path: '/Notes',
           name: 'Notes',
           component: Notes
           }
           
  ]
})
