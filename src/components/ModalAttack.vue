<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__backdrop" @click="closeModal()"/>

      <div class="modal__dialog">
        <div class="modal__header">
          <slot name="header"/>
          <button type="button" class="modal__close" @click="closeModal()">
            <i class="fa fa-times" ></i>
          </button>
        </div>

        <div class="modal__body">
          <div>Nome: {{pokemonAttack.name}}</div>
          <div>Custo: {{attackCost}}</div>
          <div>Dano: {{pokemonAttack.damage}}</div>
          <div>Descrição: {{pokemonAttack.text}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    pokemonAttack: Object,
  },
  computed: {
    attackCost: function () {
      return  this.pokemonAttack.cost.join(", ") || '-'
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModalAttack");
    },
  }
};
</script>


<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
    background: none;
    padding: 0;
    border: none;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    font-size: 20px;
    margin: 10px;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>