<template>
  <div class="container-cards" >
    <div class="cards"  v-for="(habilitie, index) in habilities" :key="index">
      <div class="itens" :style="{ borderBottom: habilitie.color}">
        <img :src="habilitie.img" alt="">
        <div class="infos">
          <p>{{habilitie.text}}</p>
          <p class="sub-habilities">{{habilitie.subHabilities}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsHabilities",
  data() {
    return {
      habilities: [
        {
          img: require('@/assets/habilities/html.svg'),
          text: 'HTMl é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.',color: '5px solid #E65100',
          subHabilities: 'HTML HTML5',
        },
        {
          img: require('@/assets/habilities/css3.svg'),
          text: 'O CSS é uma linguagem de folhas de estilos que é utilizada para definir como os documentos escritos na linguagem de marcação HTML.',
          color: '5px solid #0277BD',
          subHabilities: 'FLEX-BOX GRID',
        },
        {
          img: require('@/assets/habilities/sass.svg'),
          text: 'O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas.',
          color: '5px solid #F06292',
          subHabilities: 'aa',
        },
       {
          img: require('@/assets/habilities/javascript.svg'),
          text: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
          color: '5px solid #F4CD00',
          subHabilities: 'ARRAYS OBJETOS ASYNC/AWAIT',
        },
        {
          img: require('@/assets/habilities/vue-js.svg'),
          text: 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
          color: '5px solid #81C784',
          subHabilities: 'qqq',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container-cards {
  width: 1600px;
  display: flex;
  position: relative;
  z-index: 10;
  .cards {
    margin-left: 30px;
    .itens {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 300px;
      height: 400px;
      padding: 30px;
      background: rgba(94, 91, 91, 0.37);
      transition: all .6s;
      border-radius: 10px;
      .sub-habilities {
        font-size: 1rem;
        opacity: 0;
        text-align: center;
        transition: all .6s;
      }
      &:hover {
        transform: scale(1.1);
        height: 500px;
        .sub-habilities {
          font-size: 1rem;
          opacity: 1;
        }
      }
      img {
        width: 100px;
        height: 100px;
      }
      p {
        font-size: 13px;
        margin: 70px auto;
        text-align: justify;
        color: white;
      }
    }
  }
}

@media screen and (max-width: 1567px) {
  .container-cards {
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    .cards {
      margin-bottom: 30px;
    }
  }
}
@media screen and (max-width: 575.98px) {
.container-cards {
  .cards {
    margin-left: 0px;
    .itens {
      display: flex;
      align-items: center;
      flex-direction: column;
      .sub-habilities {
        font-size: 1rem;
        opacity: 0;
        text-align: center;
        transition: all .6s;
      }
      &:hover {
        transform: scale(1.1);
        height: 500px;
        .sub-habilities {
          font-size: 1rem;
          opacity: 1;
        }
      }
      img {
        width: 100px;
        height: 100px;
      }
      p {
        font-size: 13px;
        margin: 70px auto;
        text-align: justify;
        color: white;
      }
    }
  }
}
}
</style>