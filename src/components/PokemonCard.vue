<template>
  <div class="card">
    
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  data() {
    return {

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

</style>