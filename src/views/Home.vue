<template>
  <div @mousemove="mooveTitle" class="home" id="particles-js">
    <div class="container-infos">
      <div class="infos">
        <div class="title">RODRIGO MOLINA DEVELOPER</div>
        <div class="subtitle">const { Curioso, Inteligente, Persistente } = EU </div>
      </div>
    </div>
  <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'Home',
  el: '#home',
  methods: {
    mooveTitle(event) {
      let mouseX = event.pageX;
      let mouseY = event.pageY;
      let traX = ((4 * mouseX) / 570) + 40;
      let traY = ((4 * mouseY) / 570) + 50;
      let titleMoving = this.$el.querySelector(".title")
      titleMoving.style.backgroundPosition = traX + "%" + traY + "%"
    }
  },
  mounted() {
    this.mooveTitle
  }
}
</script>

<style scoped lang="scss">
@import '../assets/_mixins.scss';
@import url(https://fonts.googleapis.com/css?family=Raleway:400,,800,900);
.home {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/back.png'), radial-gradient(circle, rgba(15,18,36,1) 0%, rgba(9,13,25,1) 31%, rgb(1, 1, 3) 77%);
  background-size: 60%, 100%;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  .container-infos {
    width: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    .infos {
      margin-left: 1140px;
      .title{
        font-weight: 800;
        color: transparent;
        font-size:120px;
        background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
        background-position: 40% 50%;
        -webkit-background-clip: text;
        position:relative;
        text-align:center;
        line-height:90px;
        letter-spacing: -5px;
        cursor: default;
      }
      .subtitle{
        display: block;
        text-align: center;
        text-transform: uppercase;
        padding-top:10px;
        color: rgb(160, 160, 160);
      }


    }
  }
}
</style>