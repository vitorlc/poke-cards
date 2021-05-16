<template>
  <div class="main" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      bottom: false,
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.getPokemonCards()
      }
    }
  },
  async mounted() {
    document.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.getPokemonCards()
  },
  methods: {
    getPokemonCards() {
      this.$store.dispatch("getPokemonCards", { page: this.page });
      this.page++;
    },
    bottomVisible() {
      if(document.getElementById('infinite-list')) {
        const scrollY = window.scrollY
        const visible = document.documentElement.clientHeight
        const pageHeight = document.documentElement.scrollHeight
        const bottomOfPage = visible + scrollY >= pageHeight
        return bottomOfPage || pageHeight < visible
      } 
      return false
    }
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Acme");

.main {
  padding: 10px;
  min-height: 100vh;
  background: radial-gradient(#fadb8e, #f3c758);
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
}

@function stroke($stroke, $color) {
  $shadow: ();
  $from: $stroke * -1;
  @for $i from $from through $stroke {
    @for $j from $from through $stroke {
      $shadow: append($shadow, $i * 1px $j * 1px 0 $color, comma);
    }
  }
  @return $shadow;
}

@mixin stroke($stroke, $color) {
  text-shadow: stroke($stroke, $color);
}

h1 {
  @include stroke(5, #2f67af);
  color: #ffcc01;
  font-size: 3rem;
}
</style>