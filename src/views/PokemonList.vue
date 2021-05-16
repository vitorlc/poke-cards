<template>
  <div>
    <h1>Pokemon's Cards</h1>
    <div class="container">
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

export default {
  components: {
    PokemonCard,
  },
  computed: {
    pokemonsCardsList() {
      return this.$store.getters.pokemonsCards;
    },
  },
  data() {
    return {
      pokemons: [],
      searchQuery: ''
    };
  },
  methods: {
    goDetails(pokemon) {
      this.$router.push({ name: 'Pokemon Detail', params: { id: pokemon.id } })
    }
  }
};
</script>

<style lang="scss" scoped>

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