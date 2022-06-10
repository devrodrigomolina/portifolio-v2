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
    background-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128) , rgba(56, 2, 155, 0.637)50%);
    background-size: 300%;
    background-position: left;
    border-radius: 8px;
    border: none;
    margin: 0 auto;
    font-weight: 800;
    color: white;
    transition: background-position .3s;
    animation-duration: 1s;
    &:hover {
      animation-name: bounce;
      transition: all 3s;
      cursor: pointer;
      animation-timing-function: ease;
      background-position: right;
    }
  }
}

// ANIMACOES 
// BOTAO
@keyframes bounce {
  0%   { transform: translateY(0); }
  10%  { transform: translateY(0); }
  30%  { transform: translateY(-10px); }
  50%  { transform:  translateY(0); }
  100% { transform:  translateY(0); }
}
</style>