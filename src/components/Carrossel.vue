<template>
  <div class="container-carrossel">
    <div class="arrow-left" @click="arrowLeft">
      <img src="@/assets/arrowleft.svg" alt="">
    </div>
    <div class="container-projects">
      <div class="conteudo" v-for="(projects, index) in projetos" :key="index">
        <div class="infos">
          <h1>{{projects.name}}</h1>
          <p>{{projects.infos}}</p>
        </div>
        <div class="projetos">
          <video class="video" width="800px" style="border: 2px solid green; border-radius: 10px" autoplay muted loop>
            <source :src="projects.videoURL" type="video/mp4">  
          </video>
          <div class="stacks-sociais">
            <div class="stacks">
              <p>Stacks: </p>
              <div class="img-stack" v-for="(stack, index) in projetos.stacks" :key="index">
                {{stack}}
                <img :src="stack" alt="" srcset="">
              </div>
            </div>
            <div class="sociais">
              <a class="itens-sociais" target="_blank" href="https://github.com/FOXXX2K">
                <img src="@/assets/header/github.svg" alt="">
              </a>
              <a class="itens-sociais" href="">
                <img src="@/assets/link.png" alt="https://github.com/FOXXX2K">
              </a>
            </div>
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
          stacks: ["https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",'https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D' ],
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
      this.imagesTranslate -= 100
      this.imagesTranslate <= 0 ? this.imagesTranslate = 0 : ''

      element.forEach(el => {
        el.style.transform = `translateX(-${this.imagesTranslate}%)`
      });
    },
    arrowRight() {
      let element = document.querySelectorAll('.conteudo');
      this.imagesLimit++
      this.imagesTranslate += 100

      if (this.imagesLimit >= this.projetos.length) {
        this.imagesTranslate = 0
        this.imagesLimit = 0
      }

      element.forEach(el => {
        el.style.transform = `translateX(-${this.imagesTranslate}%)`
      });
    }
  },
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
      .infos, h1 {
        color: white;
        font-size: 2.5rem;
        padding-bottom: 10px;
        p {
          width: 800px;
          height: 100px;
          font-size: 14px;
        }
      }
      .projetos {
        overflow: hidden;
        .video {
          width: 100%;
          transform: translateX(0);
          object-fit: cover;
          source {
            width: 100%;
          }
        }
        .stacks-sociais {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          background: rgb(49, 48, 48);
          border-radius: 20px;
          padding-left: 10px;
          color: white;
          .stacks {
            display: flex;
            .img-stack {
              display: flex;
              margin-left: 20px;
            }
          }
          .sociais {
            display: flex;
            .itens-sociais {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              margin-right: 20px;
              margin-top: 5px;

              img {
                width: 30px;
              }
            
            }
          }
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


@media screen and (max-width: 1567px) { 
.container-carrossel {
  display: flex;
  .container-projects {
    width: 600px;
    display: flex;
    overflow: hidden;
    .conteudo {
      width: 100%;
      transition: transform 0.5s;
      .infos, h1 {
        color: white;
        font-size: 2.5rem;
        padding-bottom: 10px;
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
        .stacks-sociais {
          display: flex;
          align-items: center;
          height: 50px;
          background: rgb(49, 48, 48);
          border-radius: 20px;
          padding-left: 10px;
          color: white;
          .img-stack {
            display: flex;
            margin-left: 20px;
          }
          .sociais {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 20px;
            margin-top: 5px;
            img {
              width: 40px;
            }
          }
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
}

@media screen and (max-width: 575.98px) { 
.container-carrossel {
  width: 100%;
  .container-projects { 
    .conteudo {
      .infos, h1 {
        font-size: 1.8rem;
        p {
          width: 100%;
          text-align: center;
          margin-bottom: 100px;
          font-size: 12px;
        }
      }
      .projetos {
        .video {
          width: 80vw;
          transform: translateX(0);
          object-fit: cover;
        }
      }
      .projetos {
        .stacks-sociais {
          width: 100%;
          .img-stack {
            margin-left: 10px;
            img {
              width: 70px;
            }
          }
        }
      }

    }
  }
  .arrow-right, .arrow-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    margin: 0px;
  } 
}
}

</style>