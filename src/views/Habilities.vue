<template>
  <div class="habilidades">
    <slot></slot>
    <div class="infos">
      <h1>Minhas Habilidades</h1>
    </div>
      <div class="stacks">
        <transition :appear="true">
          <CardsHabilities/>
        </transition>
      </div>
  </div>
</template>

<script>
import CardsHabilities from '@/components/CardsHabilities.vue'

export default {
  components: {CardsHabilities},

}
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

.habilidades {
  .infos {
    position: relative;
    z-index: 10;
    h1 { 
      font-family: 'Poppins';
      background: linear-gradient(to right, #ffffff 0, rgb(13, 126, 218) 10%, #ffffff 20%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 3s infinite linear;
      animation-fill-mode: forwards;
      font-weight: 600;
      font-size: 3rem ;
      padding:110px 180px;
    }
  }

}

// RESPONSIVIDADE

@media screen and (max-width: 1567px) {
.habilidades {
  .infos {
    position: relative;
    z-index: 10;
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
}
}

// ANIMAÇÕES
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s
}
.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateY(0px);
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