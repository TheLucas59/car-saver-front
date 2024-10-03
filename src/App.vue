<script>
import CarList from './components/CarList.vue';

  export default {
    name: 'App',
    components: { CarList }
}
</script>

<template>
  <div class="head">
    <img src="./assets/icons8-voiture-100.png" alt="Car Saver">
    <h1 class="display-3">Car Saver</h1>
  </div>

  <RouterView />
</template>

<style scoped>
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

img {
  float: left;
  margin-bottom: 1%;
}

h1 {
  margin-left: 1%;
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>
