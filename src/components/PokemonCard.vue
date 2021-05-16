<template>
  <div class="card">
    <div class="card-id">#{{ pokemon.id }}</div>
    <img class="card-image" :src="`${pokemon.images.small}`" alt="" />
    <div class="card-name">
      {{ pokemon.name }}
    </div>
    <PokemonTypes :types="pokemon.types"/>
    <br />
  </div>
</template>

<script>
import PokemonTypes from "./PokemonTypes.vue";
export default {
  props: {
    pokemon: Object,
  },
  components: {
    PokemonTypes
  },
  data() {
    return {
      types: {
        Colorless: "#A8A77A",
        Darkness: "#705746",
        Dragon: "#6F35FC",
        Fairy: "D685AD",
        Fighting: "#C22E28",
        Fire: "#EE8130",
        Grass: "#7AC74C",
        Lightning: "#F7D02C",
        Metal: "#B7B7CE",
        Psychic: "#F95587",
        Water: "#6390F0",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  flex: 0 0 auto;
  width: 250px;
  height: 400px;
  box-shadow: 0px 3px 15px rgba(100, 100, 100, 0.5);
  background-color: #eee;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.card-id {
  float: left;
  font-size: 18px;
  margin-bottom: 5px;
}

.card-image {
  max-height: 300px;
}

.card-name {
  font-weight: bold;
  font-size: 25px;
  margin: 5px auto;
}
</style>