import PokemonList from '@/views/PokemonList'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)


const routes = [
  {
    name: 'Pokemon List',
    path: '/',
    component: PokemonList
  }
]

const router = new Router({ 
  mode: 'history',
  routes 
})

export default router