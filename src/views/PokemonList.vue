<template>
  <div class="main">
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
import PokemonCard from "../components/PokemonCard.vue";
import pokemonService from "../services/pokemon";

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
@import url("https://fonts.googleapis.com/css?family=Acme");

.main {
  padding: 10px;
  min-height: 100vh;
  background: radial-gradient(#e7c97b, #f7c64a);
	align-items: center;
	justify-content: center;
	text-align: center;
	
  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
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

h1 {
  color: #f1f1f1;
}
</style>