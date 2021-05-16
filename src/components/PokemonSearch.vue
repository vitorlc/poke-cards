<template>
  <div class="searchbar">
    <input type="text" v-model="searchvalue" @keyup.enter="filterPokemon" />
    <i class="fa fa-search" @click="filterPokemon"></i>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      searchvalue: "",
    };
  },
  methods: {
    filterPokemon() {
      this.$emit("filterPokemon", this.searchvalue);
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbar {
  position: relative;
  width: 100%;
  max-width: 450px;
  padding-bottom: 20px;
  input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: calc(100% - 50px);
    font-size: 1rem;
    box-shadow: 0 10px 25px rgba(100, 100, 100, 0.2),
      0 5px 5px rgba(100, 100, 100, 0.2);
  }
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25rem;
    color: #0a2e50;
    cursor: pointer;
  }
}
</style>