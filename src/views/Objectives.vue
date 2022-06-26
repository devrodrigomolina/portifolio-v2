<template>
  <div class="container-objectives">
    <slot/>
  </div>
</template>

<script>


export default {

}
</script>
<style lang="scss" scoped>

.container-objectives {



  .title {
    position: relative;
    z-index: 10;
    width: 1000px;
    padding:  110px 180px;
    h1 { 
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
  .infos {
    position: relative;
    z-index: 10;
    width: 800px;
    margin: 120px;
    background: rgba(255, 0, 0, 0.404);
    p {
      text-align: center;

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
    background-position: 980px;
  }
}
</style>