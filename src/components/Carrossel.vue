<template>
  <div class="container-carrossel">
    <div class="infos">
      <p>O maior desafio de ser freelancer é que você tem que ser um pouquinho de tudo ( Designer, Programador, etc), Este projeto foi desafiador, pois o cliente me passou apenas as cores e as fontes que ele gostaria de ter no site dele, Mas como sou apaixonado por desafios fui fazendo detalhe por detalhe até chegar neste resultado, E o mais importante é que o cliente ficou bem satisfeito com o resultado. 😍</p>
    </div>

      <div class="arrow-left" @click="arrowLeft">
        <img src="@/assets/arrowleft.svg" alt="">
      </div>
    <div class="conteudo">
      <div class="projeto1">
        <video class="video" width="800px" style="border: 2px solid green; border-radius: 10px" autoplay muted loop>
          <source  src="@/assets/projects/ProjetoStabelPiercer.mp4" type="video/mp4">  
        </video>
        <video class="video" width="800px" style="border: 2px solid green; border-radius: 10px" autoplay muted loop>
          <source  src="@/assets/projects/ProjetoStabelPiercer.mp4" type="video/mp4">  
        </video>
        <video class="video" width="800px" style="border: 2px solid green; border-radius: 10px" autoplay muted loop>
          <source  src="@/assets/projects/ProjetoStabelPiercer.mp4" type="video/mp4">  
        </video>
        <video class="video" width="800px" style="border: 2px solid green; border-radius: 10px" autoplay muted loop>
          <source  src="@/assets/projects/ProjetoStabelPiercer.mp4" type="video/mp4">  
        </video>
      </div>
    </div>
      <div class="arrow-right">
        <img src="@/assets/arrowright.svg" alt="">
      </div>
    <div style="color: white; display: flex; margin-left: 20px" class="stacks">
      <p>JS</p>
      <p>VUE</p>
      <p>SCSS</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carrossel',
  data() {
    return {
      countPixels: 0,
      images: 0
    }
  },
  methods: {
    arrowLeft() {
      this.images++
      console.log( this.images)
      console.log( this.countPixels)
      let element = document.querySelectorAll('.projeto1 video')
      this.countPixels += 800
      if (this.images > element.length -1) {
        this.images = 0
        this.countPixels = 0
      }
      element.forEach(el => {
        el.style.transform = `translateX(-${this.countPixels}px)`
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container-carrossel {
  position: relative;
  z-index: 10;
  .infos {
    color: white;
    p {
      width: 800px;
    }
  }
  .conteudo {
    
    width: 800px;
    position: relative;
    z-index: 30;
    display: flex;
    align-items: center;
      overflow: hidden;
    .projeto1 {
      
      display: flex;
      .video {
        transition: transform 0.5s;
        transform: translateX(0);
        overflow: hidden;
        object-fit: cover;
      }
      .stacks-sociais {
        color: white;
      }
    }
  }

}

</style>