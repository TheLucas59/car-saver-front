<template>
  <div>
    <h2>{{ this.car.brand }} {{ this.car.model }}</h2>
    
    <!-- Infos générales -->
    <table class="table table-striped table-bordered w-auto">
        <thead class="thead-light">
            <tr>
                <th>Catégorie</th>
                <th>Nombre de portes</th>
                <th>Date de mise en circulation</th>
                <th>Kilométrage</th>
            </tr>
        </thead>
        <tr>
            <td>{{ this.car.carCategory }}</td>
            <td>{{ this.car.doorsAvailable }}</td>
            <td>{{ this.car.deliveryDate }}</td>
            <td>{{ this.car.mileage }} km</td>
        </tr>
    </table>

    <br>
    
    <!-- Moteurs -->
    <table class="table table-striped table-bordered w-auto">
        <thead class="thead-light">
            <tr>
                <th>Nom</th>
                <th>Cylindrée</th>
                <th>Cylindres</th>
                <th>Architecture</th>
                <th>Puissance</th>
                <th>Distribution</th>
                <th>Injection</th>
                <th>Arbre à cames</th>
                <th>Carburant</th>
                <th>Réservoir</th>
                <th>Vitesse max.</th>
                <th>Consommation</th>
            </tr>
        </thead>
        <tr v-for="(e, index) in this.car.enginesAvailable" :key="index">
            <td>{{ e.engineCode }}</td>
            <td>{{ e.cylinderCapacity }} cm3</td>
            <td>{{ e.numberOfCylinders }}</td>
            <td>{{ e.cylinderArchitecture }}</td>
            <td>{{ e.horsepower }} ch</td>
            <td>{{ e.timingBeltType }}</td>
            <td>{{ e.injectionType }}</td>
            <td>{{ e.camshaftNumber }}</td>
            <td>{{ e.fuel }}</td>
            <td>{{ e.fuelCapacity }} L</td>
            <td>{{ e.topSpeed }} km/h</td>
            <td>{{ e.consumptionByHundredKilometers }} L/100km</td>
        </tr>
    </table>

    <br>

    <!-- Boîtes -->
    <table class="table table-striped table-bordered w-auto">
        <thead class="thead-light">
            <tr>
                <th>Nombre de vitesses</th>
                <th>Type de boîte</th>
                <th>Technologie (si automatique)</th>
            </tr>
        </thead>
        <tr v-for="(g, index) in this.car.gearboxesAvailable" :key="index">
            <td>{{ g.numberOfGears }}</td>
            <td>{{ g.type }}</td>
            <td>{{ g.automaticTechnology }}</td>
        </tr>
    </table>

    <br>

    <!-- Pneus -->
    <table class="table table-striped table-bordered w-auto">
        <thead class="thead-light">
            <tr>
                <th>Largeur des pneus</th>
                <th>Ration des pneus</th>
                <th>Taille des jantes</th>
            </tr>
        </thead>
        <tr v-for="(w, index) in this.car.wheelsAvailable" :key="index">
            <td>{{ w.tyreWidth }}</td>
            <td>{{ w.tyreRatio }}</td>
            <td>{{ w.rimSize }} "</td>
        </tr>
    </table>
  </div>
</template>

<script>
import baseUrl from '@/api/carSaverApi';

export default {
    name: 'CarDetails',
    props: {
        carId: '',
    },
    data() {
        return {
            car: {}
        }
    },
    created() {
        this.axios.get(`${baseUrl}/${this.carId}`)
        .then(response => {
            this.car = response.data
        })
    }
}
</script>

<style scoped>
h2 {
    margin-left: 20px;
}
</style>