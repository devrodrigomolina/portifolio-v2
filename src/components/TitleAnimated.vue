<template>
  <div class="container-infos">
    <h1 class="title">RODRIGO MOLINA DEVELOPER</h1>
    <h2 class="subtitle">const { Curioso, Inteligente, Persistente, Mentiroso } = EU </h2>
  </div>
</template>

<script>
export default {
  name: 'TitleAnimated',

}
</script>

<style lang="scss" scoped>
.container-infos { // TEXTOS 
  width: 100%;
  max-width: 600px;
  z-index: 2;
  margin-left: 220px;
  margin-right: 70px;
  .title{
    font-weight: 800;
    color: transparent;
    font-size: 6vw;
    background: url("../assets/rainbow-nebula.jpg") repeat;
    background-position: 40% 50%;
    -webkit-background-clip: text;
    position: relative; 
    text-align:center;
    line-height:80px;
    letter-spacing: -5px;
    cursor: default;
  }
  .subtitle{
    display: block;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    padding-top:10px;
    color: rgb(160, 160, 160);
  }
}

@media screen and (max-width: 768px) { 
.container-infos { 
  .title{
    font-size: 9vw;
    line-height:30px;
    letter-spacing: -1px;
  }
  .subtitle{
    font-size: 9px;
  }
}
}
</style>