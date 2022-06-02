<template>
  <div id="app">
    <NavBar/>
    <router-view>
      <vue-particles class="particles"
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="40"
        shapeType="star"
        :particleSize="2"
        linesColor="#dedede"
        :lineLinked="false"
        :lineOpacity="0.9"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100vh;
  font-family: 'Kanit', sans-serif;
  overflow-x: hidden;
}
body {
  width: 100vw;
  height: 100vh;  
  background-image: radial-gradient(circle, rgba(15,18,36,1) 0%, rgba(9,13,25,1) 31%, rgb(1, 1, 3) 77%);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
canvas {
  display: block;
}
#particles-js {
  position: absolute;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  z-index: 1;
}

a {
  text-decoration: none;
}
a.router-link-exact-active i {
  color: rgba(2, 123, 204, 0.562);

}
.fa-solid {
  color: rgb(207, 204, 204);
  cursor: pointer;
}
// RESPONSIVO


</style>
