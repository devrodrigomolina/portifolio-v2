<template>
  <div class="container-objectives">
    <slot></slot>
    <div class="title">
      <h1>Meus objetivos</h1>
    </div>
    <div class="infos">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque deserunt corporis quas molestiae facilis placeat earum iure, modi quisquam eius eaque voluptate accusantium minus, eum sunt libero sint tempore?</p>
    </div>

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