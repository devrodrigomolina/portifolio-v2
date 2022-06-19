<template>
  <div class="container-carrossel">
    <div class="arrow-left" @click="arrowLeft">
      <img src="@/assets/arrowleft.svg" alt="">
    </div>
    <div class="container-projects">
      <div class="conteudo" v-for="(projects, index) in projetos" :key="index">
        <div class="infos">
          <h2>{{projects.name}}</h2>
          <p>{{projects.infos}}</p>
        </div>
        <div class="projetos">
          <video class="video" width="800px" style="border: 2px solid green; border-radius: 10px" autoplay muted loop>
            <source :src="projects.videoURL" type="video/mp4">  
          </video>
          <div class="stacks">
            <p>Stacks: {{projects.stacks}}</p>
          </div>
        </div>
      </div>
    </div>
  <div class="arrow-right" @click="arrowRight">
    <img src="@/assets/arrowright.svg" alt="">
  </div>

      

  </div>
</template>

<script>
import StabelPiercing from "@/assets/projects/ProjetoStabelPiercer.mp4"
import CS from "@/assets/projects/CS.mp4"

export default {
  name: 'Carrossel',
  data() {
    return {
      imagesTranslate: 0,
      imagesLimit: 0,
      projetos: [
        {
          name: 'Projeto Freelance StabelPiercing',
          infos: 'O maior desafio de ser freelancer é que você tem que ser um pouquinho de tudo ( Designer, Programador, etc), Este projeto foi desafiador, pois o cliente me passou apenas as cores e as fontes que ele gostaria de ter no site dele, Mas como sou apaixonado por desafios fui fazendo detalhe por detalhe até chegar neste resultado, E o mais importante é que o cliente ficou bem satisfeito com o resultado.',
          stacks: 'JAVASCRIPT, VUE.JS, CSS',
          videoURL: StabelPiercing
        },
        {
          name: 'Projeto Counter Strike Global ofensive',
          infos: 'Isso sou eu jogando CS GO.',
          stacks: 'HABILIDADES EXTREMAS',
          videoURL: CS
        },
        {
          name: 'Projeto Freelance StabelPiercing',
          infos: 'O maior desafio de ser freelancer é que você tem que ser um pouquinho de tudo ( Designer, Programador, etc), Este projeto foi desafiador, pois o cliente me passou apenas as cores e as fontes que ele gostaria de ter no site dele, Mas como sou apaixonado por desafios fui fazendo detalhe por detalhe até chegar neste resultado, E o mais importante é que o cliente ficou bem satisfeito com o resultado.',
          stacks: 'JAVASCRIPT, VUE.JS, CSS',
          videoURL: StabelPiercing
        },
      ]
    }
  },
  methods: {
    arrowLeft() {
      let element = document.querySelectorAll('.conteudo');
      this.imagesTranslate -= 800
      this.imagesTranslate <= 0 ? this.imagesTranslate = 0 : ''

      element.forEach(el => {
        el.style.transform = `translateX(-${this.imagesTranslate}px)`
      });
    },
    arrowRight() {
      let element = document.querySelectorAll('.conteudo');
      this.imagesLimit++
      this.imagesTranslate += 800

      if (this.imagesLimit >= this.projetos.length) {
        this.imagesTranslate = 0
        this.imagesLimit = 0
      }

      element.forEach(el => {
        el.style.transform = `translateX(-${this.imagesTranslate}px)`
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container-carrossel {
  display: flex;
  .container-projects {
    width: 800px;
    display: flex;
    overflow: hidden;
    .conteudo {
      width: 900px;
      transition: transform 0.5s;
      .infos, h2 {
        color: white;
        padding-bottom: 20px;
        p {
          width: 800px;
          height: 100px;
          font-size: 14px;
        }
      }
      .projetos {
        .video {
          width: 100%;
          transform: translateX(0);
          object-fit: cover;
        }
        .stacks {
          color: white;
        }
      }

    }
  }
  .arrow-right, .arrow-left {
    display: flex;
    align-self: center;
    margin: 10px;
  } 

}

</style>