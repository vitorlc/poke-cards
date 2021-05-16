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
    getPokemonCards: async ({ commit }) => {
      let { data: responseData } = await pokemonService.findAll()
      commit('addPokemonCards', responseData.data)
    }
  },
	mutations: {
    addPokemonCards(state, payload) {
      state.pokemonsCards = [...payload, ...state.pokemonsCards]
    }
  }
})

export default store