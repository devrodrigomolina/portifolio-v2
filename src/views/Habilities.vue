<template>
  <div class="habilidades">
    <slot> </slot>
    <div class="infos">
      <h1>Minhas Habilidades</h1>
      <div class="stacks">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-sass"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-vuejs"></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';

.habilidades {
  padding: 90px 60px 0px 8vw;
  .infos {
    width: 500px;
    position: relative;
    z-index: 10;
    h1 {
      color: white;
      font-size: 3rem;
      font-weight: 400;
    }
    .stacks {
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      i {
        color: rgb(216, 202, 0);
        font-size: 4rem;
        margin-bottom: 20px;
      }

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