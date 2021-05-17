<template>
  <div>
    <ModalAttack :pokemonAttack="selectedAttack" v-if="selectedAttack" @closeModalAttack="closeModalAttack"/>
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
          <div v-for="(attack, index) in pokemon.attacks" :key="index" class="pokemon-attacks" @click="openModalAttack(attack)">
            {{attack.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonTypes from "@/components/PokemonTypes.vue";
import ModalAttack from '../components/ModalAttack.vue';
export default {
  props: {
    id: String,
  },
  components: {
    PokemonTypes,
    ModalAttack
  },
  async created() {
    const response = this.$store.getters.pokemonCard(this.id);
    this.pokemon = response;
  },
  data() {
    return {
      pokemon: {},
      selectedAttack: null
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
    openModalAttack(attack) {
      this.selectedAttack = attack;
    },
    closeModalAttack() {
      this.selectedAttack = null
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  align-content: space-between;

  width: 60%;
  max-height: 100vh;

  box-shadow: 0px 3px 15px rgba(100, 100, 100, 0.5);
  background-color: #eee;
  border-radius: 20px;

  padding: 20px;
}

img {
  width: 450px;
  margin: 20px 60px 20px 20px;
}

@media (max-width: 800px) {
  img {
    width: 100%;
    margin: 0 auto;
  }
}

.pokemon-details {
  font-size: 35px;
  text-align: initial;
  align-self: center;
}

.link_cursor {
  cursor: pointer;
}

.pokemon-attacks {
  width: '100%';
  padding: '0px 5px';
  margin: '0px 5px';
  cursor: pointer;  
}

</style>