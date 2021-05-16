import Vue from 'vue'
import Vuex from 'vuex'
import pokemonService from "@/services/pokemon";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pokemonsCards: []
  },
  getters: {
    pokemonsCards: state => {
      return state.pokemonsCards
    },
    pokemonCard: (state) => (id) => {
      return state.pokemonsCards.find(pokemon => pokemon.id === id)
    }
  },
  actions: {
    getPokemonCards: async ({ commit }, page) => {
      let { data: responseData } = await pokemonService.findAll(page)
      commit('addPokemonCards', responseData.data)
    }
  },
	mutations: {
    addPokemonCards(state, payload) {
      state.pokemonsCards = [...state.pokemonsCards, ...payload]
    }
  }
})

export default store