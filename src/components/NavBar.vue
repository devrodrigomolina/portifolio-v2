<template>
  <div class="container-navbar">
    <div class="navbar-itens fa-lg">
      <router-link  class="itens" to="/">
        <i class="fa-solid fa-house-user"></i>
        <p>Home</p>
      </router-link>
      <router-link to="/habilidades" class="itens">
        <i class="fa-solid fa-kitchen-set"></i>
        <p>Habilidades</p>
      </router-link>
      <router-link to="/estudos" class="itens">
        <i class="fa-solid fa-book-open"></i>
        <p>Estudos</p>
      </router-link>
      <router-link to="/formacao" class="itens">
        <i class="fa-solid fa-graduation-cap"></i>
        <p>Formação</p>
      </router-link>
      <router-link to="/objetivos" class="itens">
        <i class="fa-solid fa-bullseye"></i>
        <p>Objetivos</p>
      </router-link>
      <router-link to="/projetos" class="itens">
        <i class="fa-solid fa-list-check"></i>
        <p>Projetos</p>
      </router-link>
      <router-link to="/contato" class="itens">
        <i class="fa-solid fa-id-card"></i>
        <p>Contato</p>
      </router-link>
    </div>

    <div class="sociais-itens">
      <a class="itens-sociais" target="_blank" href="https://www.linkedin.com/in/devrodrigomolina/">
        <img src="@/assets/header/linkedin-48.svg" alt="">
        <p>Linkedin</p>
      </a>
      <a class="itens-sociais" target="_blank" href="https://github.com/FOXXX2K">
        <img src="@/assets/header/github.svg" alt="">
        <p>Github</p>
      </a>
      <a class="itens-sociais" target="_blank" href="#">
        <img src="@/assets/header/facebook.svg" alt="">
        <p>Facebook</p>
      </a>
      <a class="itens-sociais" target="_blank" href="#">
        <img src="@/assets/header/whatsapp.svg" alt="">
        <p>Whatsapp</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang="scss">
@import '../assets/_mixins.scss';

.container-navbar {
  @include container-navbar;
  &:hover {
    width: 250px;
    &:hover .itens p,  &:hover .itens-sociais p {
      @include transition-opacity1;
    }
  }
  .navbar-itens, .sociais-itens {
    @include itens-header-container;
    .itens, .itens-sociais {
      @include itens;
      &:hover {
        transition: ease-in-out .3s;
        background: rgba(0, 153, 255, 0.199);
        border-radius: 13px;
      }

      p {
        opacity: 0;
        transition: all .9s;
        margin: 0 auto;
        color: rgb(219, 219, 219);
        font-size: 1rem;
        font-weight: 300;
      }
    }
    img {
      width: 33px;
    }
  }
} 

</style>