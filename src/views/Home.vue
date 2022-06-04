<template>
  <div @mousemove="mooveTitle" class="home" >
    <slot></slot>
    <TitleAnimated />  
    <div class="container-itens">
      <img class="img-principal" src="@/assets/ImagensPS/back.png" alt="">
      <div class="itens">
        <router-link to="/contact">   
          <img class="img-mensagem" src="@/assets/ImagensPS/mensagem.png" alt="">
        </router-link>
        <router-link to="/search">
          <img class="img-lupa" src="@/assets/ImagensPS/lupa.png" alt="">
        </router-link>
        <router-link to="/projects"> 
          <img class="img-projetos" src="@/assets/ImagensPS/projetos.png" alt="">
        </router-link>
        <router-link to="/videos"> 
          <img class="img-videos" src="@/assets/ImagensPS/videos.png" alt="">
        </router-link>
        <ToogleTheme />
        <ArrowEfectsMouse/>
      </div>
    </div>

  </div>
</template>

<script>
import ToogleTheme from '@/components/ToogleTheme.vue'
import ArrowEfectsMouse from '@/components/ArrowEfectsMouse.vue'
import TitleAnimated from '@/components/TitleAnimated.vue'

export default {
  name: 'Home',
  el: '#home',
  components: { 
    ToogleTheme,
    ArrowEfectsMouse,
    TitleAnimated
  },
  methods: {
    mooveTitle(event) {
      let mouseX = event.pageX;
      let mouseY = event.pageY;
      let traX = ((4 * mouseX) / 570) + 40;
      let traY = ((4 * mouseY) / 570) + 50;
      let titleMoving = this.$el.querySelector(".title")
      titleMoving.style.transitionDuration = '150ms'
      titleMoving.style.backgroundPosition = traX + "%" + traY + "%"
    }
  },
  created() {
    this.mooveTitle
  }
}
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';
@import url(https://fonts.googleapis.com/css?family=Raleway:400,,800,900);

.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
