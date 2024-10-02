<template>
  <table>
    <thead>
        <tr>
            <th>Voiture</th>
            <th>Marque</th>
            <th>Modèle</th>
        </tr>
    </thead>
    <tr v-for="c in cars">
        <td>Placeholder</td>
        <td>{{ c.brand }}</td>
        <td>{{ c.model }}</td>
    </tr>
  </table>
</template>

<script>
import CarDetails from './CarDetails.vue';
import baseUrl from '@/api/carSaverApi';

export default {
    name: 'CarList',
    components: { CarDetails },
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

</style>