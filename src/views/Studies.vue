<template>
  <div class="container-studies">
    <slot />
    <div class="title">
      <h1>Oque estou estudando</h1>
    </div>
    <div class="infos">
      <p>Atualmente estudo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat repellendus, veniam debitis amet ipsam rerum cumque nam non at, eligendi distinctio dolorem veritatis in quaerat! Possimus obcaecati quo vitae in.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container-studies {
  .title {
    width: 1000px;
    position: relative;
    z-index: 10;
    padding:110px 180px;
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