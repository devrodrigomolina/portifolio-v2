<template>
  <div class="container-infos">
    <transition mode="in-out" name="top"  :appear="true">
      <h2 class="title">RODRIGO MOLINA DEVELOPER</h2>
    </transition>
    <transition name="left" :appear="true">
      <p>Desenvolvimento de sites responsivos usando HTML, CSS, SASS, JS, VUE.JS.</p>
      <h3 class="subtitle">const { Curioso, Inteligente, Persistente, Mentiroso } = EU </h3>
    </transition>
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
    padding-top:15px;
    color: #DDDDDC;
  }
  p {
    display: block;
    text-align: center;
    font-size: 12px;
    text-transform: uppercase;
    padding-top: 10px;
    color: #DDDDDC;
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

// ANIMAÇOES

// ANIMAÇÃO TEXTO
.top-enter, .top-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}
.top-enter-active,
.top-leave-active {
  transition: all 2s
}
.top-enter-to,
.top-leave {
  transform: translateY(0px);
  opacity: 1;
}
// ANIMACOES SUBTITULO
.left-enter, .left-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
.left-enter-active,
.left-leave-active {
  transition: all 2s;
}
.left-enter-to,
.left-leave {
  opacity: 1;
  transform: translateX(0px);
}
</style>