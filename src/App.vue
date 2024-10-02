<script>
import CarDetails from './components/CarDetails.vue';
import CarList from './components/CarList.vue';

  export default {
    name: 'App',
    components: { CarList }
}
</script>

<template>
  <h1>Car Saver</h1>

  <CarList />
</template>

<style scoped>
</style>
