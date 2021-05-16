import Page404 from '@/views/Page404'
import PokemonDetail from '@/views/PokemonDetail'
import PokemonList from '@/views/PokemonList'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)


const routes = [
  {
    name: 'Pokemon List',
    path: '/',
    component: PokemonList
  },
  {
    name: 'Pokemon Detail',
    path: '/:id',
    component: PokemonDetail,
    props: true
  },
  {
    path: '*', 
    component: Page404
  }
]

const router = new Router({ 
  mode: 'history',
  routes 
})

export default router