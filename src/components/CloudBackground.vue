<template>
  <section class="clouds">
  </section>
</template>

<script>
export default {
  name: 'Clouds'
}
</script>

<style lang="scss" scoped>
.clouds {
  width: 100vw;
  height:100vh;
  position: absolute;
  z-index: 1;
  background-color:#BFDFEC;
  background-repeat:repeat-x;
  background-image:url("https://i.stack.imgur.com/b7z29.png");
  animation: movement 10s linear infinite;
}

@media screen and (max-width: 1567px) {
.clouds {
  width: 100vw;
  height: 320vh;
  position: absolute;
  z-index: 1;
  background-color:#BFDFEC;
  background-repeat:repeat-x;
  background-image:url("https://i.stack.imgur.com/b7z29.png");
  animation: movement 10s linear infinite;
}

}


@keyframes movement{
  0% {
    background-position:0px 0px;
  }
  100%{
    background-position:560px 0px;
  }
}

</style>