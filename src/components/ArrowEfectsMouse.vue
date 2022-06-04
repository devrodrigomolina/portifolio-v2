<template>
  <div class="container">
    <img @click.once="effectArrow" class="img-setamouse" src="@/assets/ImagensPS/seta-mouse.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'ArrowEfectsMouse',
  methods: {
    effectArrow(e) {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {

  .img-setamouse {
    width: 10%;
    position: absolute;
    top: 190px;
    right: 35px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>