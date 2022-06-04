<template>
  <div class="habilidades">
    <slot> </slot>
    <div class="infos">
      <h1>Minhas Habilidades</h1>
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
  .infos {
    width: 640px;
    h1 {
      position: relative;
      color: white;
      font-size: 3rem;
      font-weight: 400;
      padding: 100px 0px 0px 200px;
      &::after {
        content: '';
        width: 450px;
        height: 3px;
        background: red;
        position: absolute;
        bottom: 0;
        left: 50%;

      }
    }

  }

}
</style>