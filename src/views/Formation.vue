<template>
  <div class="container-formation">
    <slot />
    <div class="title">
      <h1>Minhas Formações</h1>
    </div>
    <div class="lista">
      <ul>
        <li>
          <p class="date">2020 - 2021</p>
          <p class="info-form">Desenvolvedor Front End Freelancer cusando Analise e Desenvolvimento de Sistemas pela UNIFCV.
          Constantemente antenado à novas tendências tecnológicas, fiz cursos técnicos em Desenvolvimento Web pela Origamid, B7WEB, Alura e varios outros, Tenho 1,5 anos atuando como desenvolvedor front-end, atualmente faço trabalhos Freelancer, porem estou aberto para propostas de trabalho.</p>
        </li>
        <li>
          <p class="date">2021 - 2022</p>
          <p class="info-form">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quidem vel tempore ullam aliquid dolore quo quibusdam, aperiam earum velit, culpa ipsa accusantium praesentium expedita sed obcaecati voluptates amet ab!</p>
        </li>
        <li>
          <p class="date">2021 - 2022</p>
          <p class="info-form">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quidem vel tempore ullam aliquid dolore quo quibusdam, aperiam earum velit, culpa ipsa accusantium praesentium expedita sed obcaecati voluptates amet ab!</p>
        </li>
        <li>
          <p class="date">2021 - 2022</p>
          <p class="info-form">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quidem vel tempore ullam aliquid dolore quo quibusdam, aperiam earum velit, culpa ipsa accusantium praesentium expedita sed obcaecati voluptates amet ab!</p>
        </li>

      </ul>
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
        height: 100%;
        z-index: 400;
        border-radius: 1rem;
      } 
      li {
        width: 700px;
        text-align: justify;
        border: 1px solid red;
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
/*   .infos {
    position: relative;
    z-index: 10;
    width: 800px;
    margin: 120px;
    background: rgba(255, 0, 0, 0.404);
    p {
      text-align: center;

    }
  } */
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