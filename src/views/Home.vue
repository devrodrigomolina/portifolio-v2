<template>
  <div @mousemove="mooveTitle" class="home" >
    <slot></slot>
    <TitleAnimated />  
    <ModalMessage :modal="modalOpen" @update:openModal="modalOpen = false"/>
    <ModalVideos :modalVideos="modalVideosOpen" @update:openModal="modalVideosOpen = false"/>
    
    <transition name="rigth" :appear="true">
      <div class="container-itens">
        <img class="img-principal" src="@/assets/ImagensPS/back.png" alt="">
        <div class="itens">
          <img @click="modalOpen = !modalOpen" class="img-mensagem" src="@/assets/ImagensPS/mensagem.png" alt="">
          <Lupa/>
          <router-link to="/projects"> 
            <img class="img-projetos" src="@/assets/ImagensPS/projetos.png" alt="">
          </router-link>
          <img @click="modalVideosOpen = !modalVideosOpen" class="img-videos" src="@/assets/ImagensPS/videos.png" alt="">
          <ToogleTheme />
          <ArrowEfectsMouse/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ToogleTheme from '@/components/ToogleTheme.vue'
import ArrowEfectsMouse from '@/components/ArrowEfectsMouse.vue'
import TitleAnimated from '@/components/TitleAnimated.vue'
import ModalMessage from '@/components/ModalMessage.vue'
import ModalVideos from '@/components/ModalVideos.vue'
import Lupa from '@/components/Lupa.vue'

export default {
  name: 'Home',
  el: '#home',
  data() {
    return {
      modalOpen: false,
      modalVideosOpen: false
    }
  },
  components: { 
    ToogleTheme,
    ArrowEfectsMouse,
    TitleAnimated,
    ModalMessage,
    ModalVideos,
    Lupa
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
    },

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
  .container-itens { // IMAGEM INTERATIVA
    .img-principal {
      margin-right: 100px;
      width: 800px;
      height: 600px;
    }
    .itens {
      .img-mensagem {
        width: 12%;
        position: absolute;
        top:12px;
        right: 350px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
      .img-lupa {
        top:206px;
        left: 233px;
        cursor: pointer;
      }
    }
  }
}
}


@media screen and (max-width: 1200px) {
.home {
  .container-itens { // IMAGEM INTERATIVA
    .img-principal {
      width: 550px;
      height: 400px;
    }
    .itens {
      .img-mensagem {
        top: 8px;
        right: 265px;
      }
      .img-projetos {
        top:240px;
        left: 118px;
      }
      .img-lupa {
        top:134px;
        left: 157px;
      }
      .img-videos {
        top: 157px;
        left: 4px;
      }
    }
  }
}
}

// DAQUI PRA CIMA PRONTO ##############################
@media screen and (max-width: 768px) {
.home {
  flex-direction: column;
  .container-itens { // IMAGEM INTERATIVA
    .img-principal {
      margin: 0 auto;
      width: 660px;
      height: 500px;
    }
    .itens {
      .img-mensagem {
        top:11px;
        right: 208px;
      }
      .img-projetos {
        top:304px;
        left: 148px;
      }
      .img-lupa {
        top:180px;
        left: 195px;
      }
      .img-videos {
        top: 207px;
      }
    }
  }
}
}

@media screen and (max-width: 575.98px) {
  .home { 
    .container-itens {
      margin: 0 auto;
      .img-principal {
        width: 390px;
        height: 300px;
      }
      .itens {
        .img-mensagem {
          width: 14%;
          top: 2px;
          right: 119px;
        }
        .img-projetos {
          width: 14%;
          top: 180px;
          left: 83px;
        }
        .img-lupa {
          width: 16%;
          top: 100px;
          left: 110px;
        }
        .img-videos {
          width: 14%;
          top: 115px;
          left: 0px;
        }
      }
    }
  }
}

// ANIMAÇÕES
.rigth-enter, .rigth-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.rigth-enter-active,
.rigth-leave-active {
  transition: all 1s
}
.rigth-enter-to,
.rigth-leave {
  opacity: 1;
  transform: translateX(0px);
}


</style>
