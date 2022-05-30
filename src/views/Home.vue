<template>
  <div @mousemove="mooveTitle" class="home" id="particles-js">
    <div class="container-infos">
      <div class="infos">
        <div class="title">RODRIGO MOLINA DEVELOPER</div>
        <div class="subtitle"> { Curioso, Inteligente, Persistente } = EU </div>
        <!--<h2 class="hello">Hello World, eu sou o</h2>
        <h1>Rodrigo Molina</h1>
        <h2 class="skill-info">DESENVOLVEDOR FRONT-END</h2>-->
      </div>
    </div>
  <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'Home',
  methods: {
    mooveTitle(event) {
      let mouseX = event.pageX;
      let mouseY = event.pageY;
      let traX = ((4 * mouseX) / 570) + 40;
      let traY = ((4 * mouseY) / 570) + 50;
      let titleMoving = document.querySelector(".title")
      titleMoving.style.backgroundPosition = traX + "%" + traY + "%"
    }
  },
  created() {
    this.mooveTitle
  }
}
</script>

<style scoped lang="scss">

.home {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/back.png'), radial-gradient(circle, rgba(15,18,36,1) 0%, rgba(9,13,25,1) 31%, rgb(1, 1, 3) 77%);
  background-size: 60%, 100%;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;

  .container-infos {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
    .infos {
      width: 610px;
      margin-left: 200px;
      position: relative;
      .hello {
        text-transform: uppercase;
        font-size: 2rem;
        color: rgba(170, 168, 168, 0.363);
      }
  
      .skill-info {
        padding-left: 330px;
        font-size: 1.2rem;
        color: rgba(255, 0, 0, 0.425);
      }








@mixin center(){
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  left:50%;
  top:50%;
}


@import url(https://fonts.googleapis.com/css?family=Raleway:400,,800,900);

.container{
  position:absolute;
  @include center();
}
.title{
  font-weight: 800;
  color: transparent;
  font-size:100px;
  background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
  position:relative;
  text-align:center;
  line-height:90px;
  letter-spacing: -8px;
}
.subtitle{
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding-top:10px;
  color: white;
}











    }
  }
}
</style>