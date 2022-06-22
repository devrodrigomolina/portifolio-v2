<template>
  <transition mode="out-in">
    <div class="modal" v-if="modalVideos">
      <button @click="openModal">X</button>
      <Carrossel/>
    </div>
  </transition>
</template>

<script>
import Carrossel from "@/components/Carrossel.vue"

export default {
  name: 'Modal',
  components: {Carrossel},
  props: ['modalVideos'],
  methods: {
    openModal() {
      this.$emit('update:openModal')
    },
  }
}
</script>

<style lang="scss" scoped>

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
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
}

@media screen and (max-width: 1567px) { 
  .modal {
    width: 800px;
    height: 500px;
  }
}
@media screen and (max-width: 768px) { 
  .modal {
    width: 600px;
    height: 400px;
  }
}

@media screen and (max-width: 575.98px) { 
  .modal {
    width: 380px;
    height: 500px;
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