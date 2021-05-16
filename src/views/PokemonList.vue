<template>
  <div>
    <h1>Pokemon's Cards</h1>
    <div class="container">
      <PokemonCard
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue";
import pokemonService from "@/services/pokemon";

export default {
	components: {
		PokemonCard,
	},
  async created() {
    let {data: responseData} = await pokemonService.findAll()
    this.pokemons = responseData.data
  },
  data() {
    return {
      pokemons: []
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