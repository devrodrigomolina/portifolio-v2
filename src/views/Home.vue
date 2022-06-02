<template>
  <div @mousemove="mooveTitle"  class="home" >
    <slot></slot>

    <div class="container-infos">
      <h1 class="title">RODRIGO MOLINA DEVELOPER</h1>
      <h2 class="subtitle">const { Curioso, Inteligente, Persistente, Mentiroso } = EU </h2>
    </div>
      
   <div class="container-itens">
      <img class="img-principal" src="@/assets/ImagensPS/back.png" alt="">
      <div class="itens">
        <div class="icone-mensagem">
          <img class="img-mensagem" src="@/assets/ImagensPS/mensagem.png" alt="">
        </div>
        <img class="img-projetos" src="@/assets/ImagensPS/projetos.png" alt="">
        <img class="img-lupa" src="@/assets/ImagensPS/lupa.png" alt="">
        <img class="img-lampada" src="@/assets/ImagensPS/lampada.png" alt="">
        <img class="img-videos" src="@/assets/ImagensPS/videos.png" alt="">
        <img class="img-setamouse" src="@/assets/ImagensPS/seta-mouse.png" alt="">
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
  justify-content: space-evenly;
  align-items: center;
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
      font-size: 20px;
      text-transform: uppercase;
      padding-top:10px;
      color: rgb(160, 160, 160);
    }
  }

  .container-itens { // IMAGEM INTERATIVA
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: relative;  
    .img-principal {
      width: 800px;
      height: 600px;
    }
    .itens {
      .img-mensagem {
        width: 12%;
        position: absolute;
        top:15px;
        right: 255px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
      
      .img-projetos {
        width: 11%;
        position: absolute;
        top:363px;
        left: 181px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
      .img-lupa {
        width: 12.5%;
        position: absolute;
        top:214px;
        left: 237px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
      .img-lampada {
        width: 10%;
        position: absolute;
        top:110px;
        right: 130px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
      .img-videos {
        width: 10%;
        position: absolute;
        top: 247px;
        left: 5px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
      .img-setamouse {
        width: 10%;
        position: absolute;
        top: 190px;
        right: 35px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
// RESPONSIVO // RESPONSIVO // RESPONSIVO // RESPONSIVO // RESPONSIVO // RESPONSIVO // RESPONSIVO // RESPONSIVO // RESPONSIVO


@media screen and (max-width: 1567px) {
 .home { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .home { 
    .container-infos { // TEXTOS 
      width: 280px;
      margin-left: 40px;
      margin-right: 0;
      .title{
        font-size: 50px;
        line-height:70%;
        letter-spacing: -3px;
      }
      .subtitle{
        font-size: 8px;
      }
    }
    .container-itens {
      margin-left: 60px;
      .img-principal {
        width: 330px;
        height: 250px;
        border: 1px solid red;
      }
      .itens {
        .img-mensagem {
          top: 3px;
          right: 190px;
        }
        .img-projetos {
          top: 274px;
          left: 135px;
        }
        .img-lupa {
          top:162px;
          left: 176px;
        }
        .img-lampada {
          top: 70px;
          right: 100px;
        }
        .img-videos {
          top: 189px;
        }
        .img-setamouse {
          top: 130px;
        }
      }
    }
  }
}
</style>
