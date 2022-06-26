<template>
  <div class="container-lupa">
    <img @drag="drag"  draggable="true" class="img-lupa" src="@/assets/ImagensPS/lupa.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Lupa',
  methods: {
    drag() {
 
      console.log('arrastamdo')
    }
  }
}
</script>

<style lang="scss" scoped>
.container-lupa {
  .img-lupa {
    width: 12.5%;
    position: absolute;
    top:214px;
    left: 237px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>

