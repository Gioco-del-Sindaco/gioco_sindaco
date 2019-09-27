import Vue from 'vue'
import Router from 'vue-router'
import Istruzioni from '../components/Istruzioni.vue'
import Header from '../components/Header.vue'
import Selezione from '../components/Selezione.vue'
import Game from '../components/Game.vue'
import Results from '../components/Results.vue'
import Fine from '../components/Fine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Istruzioni',
      component: Istruzioni
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/selezione',
      name: 'Selezione',
      component: Selezione
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/fine',
      name: 'Fine',
      component: Fine
    }
  ]
})
