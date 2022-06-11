<template>
  <div class="container-studies">
    <slot></slot>
    <h1>Oque estou estudando</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container-studies {
  
  h1 { 
    font-family: 'Poppins';
    background: linear-gradient(to right, #ffffff 0, rgb(13, 126, 218) 10%, #ffffff 20%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    padding: 80px 0;
  }
}

@keyframes shine {
  0% {
    background-position: -380px;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 980px;
  }
}
</style>