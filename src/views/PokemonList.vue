<template>
  <div>
    <div class="header">
      <h1>Pokemon's Cards</h1>
      <PokemonSearch @filterPokemon="filterPokemon" />
    </div>
    <div class="container" id="infinite-list">
      <PokemonCard
        v-for="(pokemon, index) in pokemonsCardsList"
        :key="index"
        :pokemon="pokemon"
        @click.native="goDetails(pokemon)"
      />
    </div>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue";
import PokemonSearch from "../components/PokemonSearch.vue";
export default {
  components: {
    PokemonCard,
    PokemonSearch,
  },
  computed: {
    pokemonsCardsList() {
      return this.$store.getters.pokemonsCards.filter((e) => {
        if (e.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) === -1)
          return false;
        return true;
      });
    },
  },
  data() {
    return {
      pokemons: [],
      searchQuery: "",
    };
  },
  methods: {
    goDetails(pokemon) {
      this.$router.push({ name: "Pokemon Detail", params: { id: pokemon.id } });
    },
    filterPokemon(pokemonName) {
      this.searchQuery = pokemonName;
    },
  },
};
</script>

<style lang="scss" scoped>

.header {
  display: inline-block;
}

.container {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
}

@media (max-width: 600px) {
  .container {
    flex-flow: row nowrap;
    overflow-x: auto;
    justify-content: flex-start;
  }
}
</style>