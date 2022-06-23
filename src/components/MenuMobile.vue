<template>
  <div class="container-hamburguer">
    <input 
      type="checkbox"
      id="btn-mobile"
      class="btn-mobile"
      v-model="checked"
      @click="menuMobile"
    >
    <label for="btn-mobile">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'MenuMobile',
  data() {
    return {
      checked: false
    }
  },
  methods: {
    menuMobile() {
      const el = document.querySelector('.container-navbar');
      const p = document.querySelectorAll('.itens p, .itens-sociais p');

      !this.checked ? el.classList.add('actived') : el.classList.remove('actived');
      p.forEach((e) => {
        e.style.opacity = 1
        e.addEventListener('click', () => {
          el.classList.remove('actived') ;
          this.checked = false
        })

      })
    },
  },

}
</script>

<style lang="scss" >
.btn-mobile {
  display: none;
}

@media screen and (max-width: 575.98px) {

.container-hamburguer {
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 60px;
  position: fixed;
  z-index: 9999;  
  

  .btn-mobile {
    position: absolute;
    opacity: 0;
  }
  label {
  
    cursor: pointer;
    position: relative;
    left: -65px;
    top: 30px;
    display: block;
    height: 22px;
    width: 30px;
    span {
      position: absolute;
      display: block;
      height: 4px;
      width: 100%;
      z-index: 99999;
      border-radius: 30px;
      background: white;
      transition: all .3s;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 10px;
      }
      &:nth-child(3) {
        top: 20px;
      }
    }
  }
  .btn-mobile:checked + label span:nth-child(1) {
    transform: rotate(-45deg);
    top: 10px;
  }
  .btn-mobile:checked + label span:nth-child(2) {
    opacity: 0;
  }
  .btn-mobile:checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 10px;
  }
  
}
}


</style>