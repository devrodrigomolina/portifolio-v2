<template>
  <div class="container-studies">
    <slot />
    <div class="infos">
      <h1>Oque estou estudando</h1>
      <p>Atualmente estudo Desenvolvedor Front End Freelancer cusando Analise e Desenvolvimento de Sistemas pela UNIFCV. Constantemente antenado à novas tendências tecnológicas, fiz cursos técnicos em Desenvolvimento Web pela Origamid, B7WEB, Alura e varios outros, Tenho 1,5 anos atuando como desenvolvedor front-end, atualmente faço trabalhos Freelancer, porem estou aberto para propostas de trabalho.</p>
      <ul>
        <li>
         <p class="date">UNIFCV - Análise e Desenvolvimento de Sistemas | 2022 - 2024</p>
          <p class="info-form">• Em andamento</p>
        </li>
        <li>
          <p class="date">ORIGAMID | 2022 - 2022</p>
          <p class="info-form">• Vue.js 2 Completo</p>
          <p class="info-form">• Vuex & Vue Router</p>
          <p class="info-form">• Axios & REST API</p>
        </li>
        <li>
          <p class="date">ORIGAMID | 2021 - 2022</p>
          <p class="info-form">• HTML & CSS</p>
          <p class="info-form">• Javascript Completo ES6</p>
          <p class="info-form">• CSS Avançado Flexbox & grid</p>
          <p class="info-form">• Manipulação do DOM</p>
          <p class="info-form">• Javascript Assincrono</p>
        </li>
        <li>
          <p class="date">JAVASCRIPT BÁSICO AO AVANÇADO | 2021 - 2021</p>
          <p class="info-form">• JS Básico, Funcional e Orientado a Objetos.</p>
          <p class="info-form">• Princípios da programação orientada a objetos</p>
          <p class="info-form">• Javascript Assincrono - Promisses, Fetch, Async/Await</p>
        </li>
        <li>
          <p class="date">CURSO EM VIDEO | 2021 - 2021</p>
          <p class="info-form">• HTML5 & CSS3 MÓDULO 5/5 COMPLETO</p>
        </li>
      </ul>

    </div>
    <div class="image">
      <img src="@/assets/estudos.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container-studies {  
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .infos {
    width: 800px;
    height: 700px;
    z-index: 10;
    h1 { 
      font-family: 'Poppins';
      background: linear-gradient(to right, #707070 0, rgb(255, 255, 255) 10%, #707070 20%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 3s infinite linear;
      animation-fill-mode: forwards;
      font-weight: 600;
      font-size: 3rem ;
    }
    p {
      margin-left: 8px;
      text-align: justify;
      color: white;
      /* margin-top: 200px; */
      color: #FFFFFF;

    }
    ul {
      list-style-type: none;
      position: relative;
      padding-left: 1.5rem;
      margin-top: 30px;
      &::before {
        content: " ";
        background: #ededed;
        display: inline-block;
        position: absolute;
        left: 16px;
        width: 4px;
        animation: ulbar 4s linear both;
        z-index: 400;
        border-radius: 1rem;
      }   
      li {
        text-align: justify;
        width: 700px;
        margin-bottom: 30px;
        &:nth-child(2) {
          animation: liItens .1s 0.8s linear  both;
        }
        &:nth-child(3) {
          animation: liItens .2s 1.8s linear  both;
        }
        &:nth-child(4) {
          animation: liItens .3s 3s linear  both;
        }
        &:nth-child(5) {
          animation: liItens .4s 4s linear  both;
        }
        &::before {
          content: " ";
          background: #fbd214;
          display: inline-block;
          position: absolute;
          left: 10px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #fff;
          z-index: 400;
        }
      }
      .date {
        color: #9b9b9b;
        font-size: 16px;
      }
      .info-form {
        color: rgba(126, 123, 123, 0.877);
        font-size: 14px;
        font-weight: 200;
      }
    }
  }
  .image {
    img {
      opacity: 0.7;
      width: 600px;
      position: relative;
      z-index: 2;
    }
  }
}

@keyframes shine {
  0% {
    background-position: -380px;
  }
  50% {
    background-position: 180px;
  }
  100% {
    background-position: 1180px;
  }
}
@keyframes liItens {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes ulbar {
  0% {
    height: 0%
  }
  25% {
    height: 25%
  }
  50% {
    height: 50%
  }
  75% {
    height: 75%
  }
  100% {
    height: 100%;
  }
}
</style>