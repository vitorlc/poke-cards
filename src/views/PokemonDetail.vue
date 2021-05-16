<template>
  <div>
    <h1 class="link_cursor" @click="goBack">&#60; Voltar</h1>
    <h1>{{ pokemon.name }}</h1>
    <div class="container">
      <img
        class="pokemon-img"
        :src="`${pokemon.images.large}`"
        alt="Pokemon Card"
      />
      <div class="pokemon-details">
        <div>ID: {{ pokemon.id }}</div>
        <PokemonTypes :types="pokemon.types" />
        <div>
          Resistencia(s):
          {{ joinTypeValues(pokemon.resistances) }}
        </div>
        <div>
          Fraqueza(s):
          {{ joinTypeValues(pokemon.weaknesses) }}
        </div>
        <div>
          Ataque(s):
          {{ pokemon.attacks.map((attack) => `${attack.name}`).join(", ") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonTypes from "@/components/PokemonTypes.vue";
export default {
  props: {
    id: String,
  },
  components: {
    PokemonTypes,
  },
  async created() {
    const response = this.$store.getters.pokemonCard(this.id);
    this.pokemon = response;
  },
  data() {
    return {
      pokemon: {},
    };
  },
  methods: {
    joinTypeValues(item) {
      if (item)
        return item.map(({ type, value }) => `${type} (${value})`).join(", ");
      else return "-";
    },
    goBack() {
      this.$router.push({ name: "Pokemon List" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  align-content: space-between;

  width: 70%;
  max-height: 100vh;

  box-shadow: 0px 3px 15px rgba(100, 100, 100, 0.5);
  background-color: #eee;
  border-radius: 20px;

  padding: 20px;
}

img {
  width: 450px;
  margin: 20px;
}

@media (max-width: 800px) {
  img {
    width: 100%;
    margin: 0 auto;
  }
}

.pokemon-details {
  font-size: 25px;
  text-align: initial;
  align-self: center;
}

.link_cursor {
  cursor: pointer;
}
</style>