<template>
  <div class="container-formation">
    <slot />
    <div class="title">
      <h1>Minhas Formações</h1>
    </div>
    <div class="container">
      
      <div class="lista">
        <ul>
          <li>
            <p class="date">UNIFCV - Análise e Desenvolvimento de Sistemas | 2022 - 2024</p>
              <p class="info-form">• Em andamento</p>
          </li>
        </ul>
      </div>
      <div class="image">
        <img src="@/assets/formacao.png" alt="">
      </div>
    </div>
    <!-- <div class="infos">
      <p>Desenvolvedor Front End Freelancer cusando Analise e Desenvolvimento de Sistemas pela UNIFCV.
      Constantemente antenado à novas tendências tecnológicas, fiz cursos técnicos em Desenvolvimento Web pela Origamid, B7WEB, Alura e varios outros, Tenho 1,5 anos atuando como desenvolvedor front-end, atualmente faço trabalhos Freelancer, porem estou aberto para propostas de trabalho.</p>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container-formation {
  .title {
    position: relative;
    z-index: 10;
    width: 1000px;
    padding:  110px 180px;
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
  }
  .container {
    display: flex;
    .lista {
      margin-left: 200px;
      position: relative;
      z-index: 1000;
      ul {
        list-style-type: none;
        position: relative;
        padding-left: 2.5rem;
        &::before {
          content: " ";
          background: #ededed;
          display: inline-block;
          position: absolute;
          left: 16px;
          width: 4px;
          animation: ulbar .5s linear both;
          z-index: 400;
          border-radius: 1rem;
        } 
        li {
          width: 700px;
          text-align: justify;
          margin-bottom: 50px;
          &:nth-child(1) {
            animation: liItens .1s linear both;
          }
          &:nth-child(2) {
            animation: liItens .3s 2s linear  both;
          }
          &:nth-child(3) {
          animation: liItens .5s 3s linear  both;
          }
          &:nth-child(4) {
            animation: liItens .7s 5s linear  both;
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
          .date {
            color: rgb(29, 29, 29);
            font-size: 16px;
          }
          .info-form {
            color: rgb(88, 88, 88);
            font-size: 14px;
          }

        }
      }
    }
    .image {
      img {
        margin-left: 200px;
        position: relative;
        z-index: 100;
        opacity: 0.7;
        width: 700px;
      } 
   }
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

@keyframes liItens {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
    background-position: 980px;
  }
}
</style>