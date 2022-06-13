<template>
  <div class="container-studies">
    <slot />

    <div class="infos">
      <h1>Oque estou estudando</h1>
      <p>Atualmente estudo Desenvolvedor Front End Freelancer cusando Analise e Desenvolvimento de Sistemas pela UNIFCV. Constantemente antenado à novas tendências tecnológicas, fiz cursos técnicos em Desenvolvimento Web pela Origamid, B7WEB, Alura e varios outros, Tenho 1,5 anos atuando como desenvolvedor front-end, atualmente faço trabalhos Freelancer, porem estou aberto para propostas de trabalho.</p>
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
      margin-top: 10px;
      margin-left: 8px;
      text-align: justify;
      color: white;
      /* margin-top: 200px; */
    } 
    ul {
      list-style-type: none;
      position: relative;
      padding-left: 1.5rem;
      margin-top: 100px;
      &::before {
        content: " ";
        background: #ededed;
        display: inline-block;
        position: absolute;
        left: 16px;
        width: 4px;
        animation: ulbar 2s linear both;
        z-index: 400;
        border-radius: 1rem;
      }   
      li {
        text-align: justify;
        width: 700px;
        margin-bottom: 50px;

        &:nth-child(2) {
          animation: liItens .3s 1s linear  both;
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
        color: rgb(29, 29, 29);
        font-size: 16px;
      }
      .info-form {
        color: rgb(88, 88, 88);
        font-size: 14px;
      }
    }
  }

  .image {
    img {
      opacity: 0.7;
      width: 600px;
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