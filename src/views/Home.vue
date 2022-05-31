<template>
  <div @mousemove="mooveTitle"  class="home" >
    <slot></slot>
    <div class="container-infos">
      
      <div class="infos">
        <div class="title">RODRIGO MOLINA DEVELOPER</div>
        <div class="subtitle">const { Curioso, Inteligente, Persistente, Mentiroso } = EU </div>
      </div>

      <div class="img-interativa">
        <img class="img-principal" src="@/assets/ImagensPS/back.png" alt="">
        <img class="img-mensagem" src="@/assets/ImagensPS/mensagem.png" alt="">
        <img class="img-projetos" src="@/assets/ImagensPS/projetos.png" alt="">
        <img class="img-lupa" src="@/assets/ImagensPS/lupa.png" alt="">
        <img class="img-lampada" src="@/assets/ImagensPS/lampada.png" alt="">
        <img class="img-videos" src="@/assets/ImagensPS/videos.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Home',
  el: '#home',
  methods: {
    mooveTitle(event) {
      let mouseX = event.pageX;
      let mouseY = event.pageY;
      let traX = ((4 * mouseX) / 570) + 40;
      let traY = ((4 * mouseY) / 570) + 50;
      let titleMoving = this.$el.querySelector(".title")
      titleMoving.style.backgroundPosition = traX + "%" + traY + "%"
    }
  },
  mounted() {
    this.mooveTitle
  }
}
</script>

<style scoped lang="scss">
@import '../assets/_mixins.scss';
@import url(https://fonts.googleapis.com/css?family=Raleway:400,,800,900);
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  .container-infos {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 200px;
    .infos {
      width: 800px;
      .title{
        font-weight: 800;
        color: transparent;
        font-size: 8rem;
        background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
        background-position: 40% 50%;
        -webkit-background-clip: text;
        position: relative; 
        text-align:center;
        line-height:90px;
        letter-spacing: -5px;
        cursor: default;
      }
      .subtitle{
        display: block;
        text-align: center;
        text-transform: uppercase;
        padding-top:10px;
        color: rgb(160, 160, 160);
      }
    }
    .img-interativa {
      width: 900px;
      position: relative;
        z-index: 2;
      .img-principal {
        width: 100%;
      }
      .img-mensagem {
        width: 105px;
        position: absolute;
        top: 18px;
        left: 510px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
      .img-projetos {
        width: 105px;
        position: absolute;
        top:400px;
        left: 200px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
      .img-lupa {
        width: 110px;
        position: absolute;
        top:240px;
        left: 268px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
      .img-lampada {
        width: 110px;
        position: absolute;
        top:110px;
        right: 110px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
      .img-videos {
        width: 90px;
        position: absolute;
        top:270px;
        left: 6px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
