<template>
  <div class="container">
    <slot/>
    <div class="left">
      <h1>Meus Projetos</h1>
      <Carrossel/>
    </div>
    <div class="rigth">
      <div class="image">
        <img src="@/assets/background-projects.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Carrossel from "@/components/Carrossel.vue"
export default {
  components: {
    Carrossel
  }
}
</script>

<style lang="scss" scoped>

.container {
  position: relative; 
  z-index: 2;
  display: flex;

  width: 100vw;

  .left {
    position: relative; 
    z-index: 2;
    left: 90px;
    width: 1150px;
    margin-left: 100px;    
    margin-top: 80px;    
    h1 { 
      margin-bottom: 40px;
      font-family: 'Poppins';
      background: linear-gradient(to right, #707070 0, rgb(255, 255, 255) 10%, #707070 20%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 3s infinite linear;
      animation-fill-mode: forwards;
      font-weight: 600;
      font-size: 3rem ;
    }
  }
  .rigth {
    position: absolute;
    right: 0;
    top: 25%;
    z-index: 1;
    .image {
      img {

        width: 40vw;
        opacity: 0.7;
       
      }
    }
  }
}


@keyframes shine {
  0% {
    background-position: -380px;
  }
  50% {
    background-position: 180px;
  }
  100% {
    background-position: 1180px;
  }
}
@keyframes liItens {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes ulbar {
  0% {
    height: 0%
  }
  25% {
    height: 25%
  }
  50% {
    height: 50%
  }
  75% {
    height: 75%
  }
  100% {
    height: 100%;
  }
}
</style>