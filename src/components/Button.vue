<template>
  <div class="container-btn">
    <button>Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      titulo: 'Enviar'
    }
  }
}
</script>

<style lang="scss" >
.container-btn {
  width: 100%;
  height: 40px;
  button {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56, 2, 155, 0.637));
    border-radius: 8px;
    border: none;
    margin: 0 auto;
     font-weight: 800;
    color: white;
    &:hover {
      cursor: pointer;
      background-image: linear-gradient(0.25turn, rgb(177, 171, 17), rgb(192, 0, 96), rgba(41, 3, 112, 0.781));
    }
  }
}
</style>