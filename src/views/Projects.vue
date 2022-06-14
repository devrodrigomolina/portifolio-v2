<template>
  <div class="projetos">
    <div class="container">

      <div class="left">
        <div class="infos">
          <h1>Oque estou estudando</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate, enim ratione vel illum veritatis distinctio dolores rerum ipsum ut sint debitis harum. Saepe dolore enim molestias quidem assumenda consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut porro qui, vitae ad natus facilis tempora ipsa consectetur asperiores dolores unde itaque temporibus incidunt adipisci non aliquam debitis sit!</p>
        </div>
        <div class="conteudo">
          <p>asdasdsad</p>
        </div>
      </div>

      <div class="rigth">
        <div class="image">
          <img src="@/assets/background-projects.png" alt="">
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.projetos {  
  .container {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100%;
    .left {
      border: 1px solid red;
      width: 1150px;
      padding: 130px;    
      .infos {
        color: white;
     
        .conteudo {
        }
        h1 {
          font-size: 3rem;
        }
      }
    }
    .rigth {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .image {
        img {
          width: 700px;
        }
      }
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