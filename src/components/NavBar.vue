<template>
  <div class="container-navbar" :class="clearMode">
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
      <router-link to="/contatos" class="itens">
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
  name: 'NavBar',
  computed: {
    clearMode() {
      return this.$store.state.themeCurrent ? 'nav-clearmode' : 'nav-darkmode'
    }
  },
}
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

.container-navbar {
  @include column-between;
  width: 50px;
  height: 100vh;
  border-right: 1px solid rgb(124, 124, 124);
  background-size: 20px 20px;
  position: absolute;
  z-index: 999;
  border-radius: 0px 15px 15px 0px;
  @include transition-opacity1;
  &:hover {
    width: 250px;
    &:hover .itens p,  &:hover .itens-sociais p {
      @include transition-opacity1;
    }
  }
  .navbar-itens, .sociais-itens {
    @include flex-column;
    width: 100%;
    border-radius: 0px 15px 15px 0px;
    .itens, .itens-sociais {
      @include flex-center;
      padding: 10px;
      margin-top: 20px;
      cursor: pointer;
      &:hover {
        transition: ease-in-out .3s;
        background: rgba(239, 240, 240, 0.342);
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
// TROCA DE TEMAS

.nav-clearmode {
  background: transparent;
}
.nav-darkmode {
  background: rgba(0, 0, 0, 0.781);
}

// RESPONSIVIDADE

@media screen and (max-width: 1567px) {

.container-navbar {
 // display: none;
}
}

</style>