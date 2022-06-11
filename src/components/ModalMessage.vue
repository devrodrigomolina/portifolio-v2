<template>
  <transition mode="out-in">
    <div class="modal" v-if="modal">
      <button @click="openModal">X</button>
      <div class="mensagem">
        <h2>Se quiser mandar uma mensagem diretamente daqui, basta enviar abaixo:</h2>
        <div class="inputs">
          <input type="text" placeholder="Nome" id="name">
          <input type="email" placeholder="Email" name="" id="email">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <Button/>
        </div>
        <h2>Ou se preferir, entre em contato direto:</h2>
        <div class="contatos-sociais">
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
    </div>
  </transition>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
  name: 'Modal',
  components: {Button},
  props: ['modal'],
  methods: {
    openModal() {
      this.$emit('update:openModal')
    },
  }
}
</script>

<style lang="scss" scoped>

.modal {
  width: 1000px;
  height: 800px;
  background: rgba(27, 26, 26, 0.884);
  border-radius: 20px;
  position: absolute;
  z-index: 3;
 
  button {
    color: white;
    background-image: linear-gradient(0.25deg, rgba(255, 248, 34, 0.363), rgba(255, 0, 128, 0.336), rgba(56, 2, 155, 0.774));
    border: none;
    font-size: 1rem;
    font-weight: 800;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  .mensagem {
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    margin: 10px auto;
    flex-direction: column;
    h2 {
      font-size: 20px;
      color: white;
      margin: 40px 0px;
    }
    .inputs {
      input, textarea {
        width: 100%;
        height: 40px;
        margin: 20px 0px;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0));
        border-image-slice: 1;
        padding-left: 10px;
        border-radius: 8px;
        caret-color: rgba(255,249,34);
        color: white;
        background: none;
        &:focus {
          outline: none;
        }
      }
      textarea {
        padding: 10px 0px 0px 10px;
        height: 140px;
        resize: none;
      }
      #message::placeholder  {
        position: absolute;
        top: 10px; 
        left: 10px;
      }
    }
    .contatos-sociais {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      a {
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        color: white;
      }
    }
  }
}

.v-enter, .v-leave-to {
  top: -130px;
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all .7s
}
.v-enter-to,
.v-leave {
  opacity: 1;
  top: 65px;
}
</style>