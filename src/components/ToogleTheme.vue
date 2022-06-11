<template>
  <div class="container">
    <input class="checkbox" type="checkbox" @click="changePageTheme(checked)" v-model="checked" id="chk">
    <label for="chk">
      <img v-if="checked" class="img-lampada" src="@/assets/ImagensPS/lampada.png" alt="">
      <img v-else class="img-lampada-desligada" src="@/assets/ImagensPS/lampadaDesligada.png" alt="">
    </label>
  </div>
</template>

<script>
export default {
  name: 'ToogleTheme',
  data() {
    return {
      checked: ''
    }
  },
  watch: {
    checked() {
      localStorage.setItem('theme',this.checked)
      const getTheme = localStorage.getItem('theme');
      const objTheme = JSON.parse(getTheme)
      console.log(typeof objTheme)
      this.checked = objTheme
    }
  },
  methods: {
    changePageTheme(checked) {
      this.$store.dispatch("changeTheme", checked)
    },

  },

}
</script>

<style lang="scss" scoped>
.container {
  .checkbox {
    position: absolute;
    top:110px;
    right: 130px;
    opacity: 0;
    &:checked {
      transition: all .3s;
    }
  }
  .img-lampada {
    width: 10%;
    position: absolute;
    top: 40px;
    right: 40px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
  .img-lampada-desligada {
    width: 6.5%;
    position: absolute;
    top: 40px;
    right: 40px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>