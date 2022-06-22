<template>
  <div class="container">
    <input class="checkbox" type="checkbox"  v-model="checked" id="chk">
    <label for="chk" @click="saveChecked">
      <img v-if="!checked" class="img-lampada" src="@/assets/ImagensPS/lampada.png" alt="">
      <img v-else class="img-lampada-desligada" src="@/assets/ImagensPS/lampadaDesligada.png" alt="">
    </label>
  </div>
</template>

<script>
export default {
  name: 'ToogleTheme',
  data() {
    return {
      checked: false
    }
  },

  methods: {
    saveChecked() {
      localStorage.setItem('theme', !this.checked)
    },
  },

  created() {
    const chec = localStorage.getItem('theme')
    const chec2 = JSON.parse(chec)
    this.checked = chec2
  },
  watch: {
    checked() {
      this.$store.dispatch("changeTheme", this.checked)
    }
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

@media screen and (max-width: 1567px) { 
  .container {
    .img-lampada {
      top: 70px;
      right: 190px;
    }
    .img-lampada-desligada {
      top: 70px;
      right: 190px;
    }
  }
}
@media screen and (max-width: 1200px) { 
  .container {
    .img-lampada {
      top: 50px;
      right: 140px;
    }
    .img-lampada-desligada {
      top: 50px;
      right: 140px;
    }
  }
}
@media screen and (max-width: 768px) { 
  .container {
    .img-lampada {
      top: 60px;
      right: 105px;
    }
    .img-lampada-desligada {
      top: 60px;
      right: 105px;
    }
  }
}
@media screen and (max-width: 575.98px) { 
  .container {
    .img-lampada {
      top: 40px;
      right: 45px;
    }
    .img-lampada-desligada {
      top: 40px;
      right: 45px;
    }
  }
}
</style>