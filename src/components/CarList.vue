<template>
  <table class="table table-striped table-bordered w-auto">
    <thead class="thead-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Marque</th>
            <th scope="col">Modèle</th>
        </tr>
    </thead>
    <tr v-for="(c, index) in cars" :key="index">
        <td>{{ index }}</td>
        <td>{{ c.brand }}</td>
        <td>{{ c.model }}</td>
    </tr>
  </table>
</template>

<script>
import CarCreator from './CarCreator.vue';
import CarDetails from './CarDetails.vue';
import baseUrl from '@/api/carSaverApi';

export default {
    name: 'CarList',
    components: { CarDetails, CarCreator },
    data() {
        return { 
            cars: []
        }
    },
    created() {
        this.axios.get(`${baseUrl}/getAll`)
        .then(response => {
            this.cars = response.data
        })
    }
}
</script>

<style>
.table {
   text-align: center;
   margin: auto;
   width: 50% !important; 
}
</style>