<template>
  <div class="habilidades">
    <slot> </slot>
    <div class="infos">
      <h1>Minhas Habilidades</h1>
    </div>
    <div class="stacks">
      <CardsHabilities/>
    </div>
  </div>
</template>

<script>
import CardsHabilities from '@/components/CardsHabilities.vue'

export default {
  components: {CardsHabilities}
}
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';

.habilidades {
  .infos {
    position: relative;
    z-index: 10;
    h1 {
      color: white;
      font-size: 3rem;
      font-weight: 400;
      padding:110px 180px;
    }
  }

}
/*
.title-enter, .title-leave-to {
  width: 0px;
}
.title-enter-active,
.title-leave-active {
  transition: all .7s
}
.title-enter-to,
.title-leave {
  width: 100%;
}*/
</style>