<template>
  <div class="card-types">
    Tipo(s):
    <div
      v-for="type in types"
      :key="type"
      :style="{
        'background-color': `${typesColor[type]}`,
        width: '100%',
        padding: '0px 5px',
        margin: '0px 5px',
      }"
    >
      {{ type }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    types: Array,
  },
  data() {
    return {
      typesColor: {
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
.card-types {
  display: inline-flex;
}
</style>