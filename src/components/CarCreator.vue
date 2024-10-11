<template>
  <h4 class="display-4 center">Ajouter une voiture</h4>
  <form>
    <h5 class="display-5">Informations générales</h5>
    <div class="form-group">
        <label for="brand">Marque</label>
        <input type="text" name="brand" v-model="brand">
    </div>
    <br>
    <div class="form-group">
        <label for="model">Modèle</label>
        <input type="text" name="model" v-model="model">
    </div>
    <br>
    <div class="form-group">
        <label for="carCategorie">Catégorie</label>
        <select name="carCategory" v-model="category">
            <option value="{{ c }}" v-for="(c, index) in carCategoryList" :key="index">{{ c }}</option>
        </select>
    </div>
    <br>
    <div class="form-group">
        <label for="deliveryDate">Date de première mise en circulation</label>
        <input type="date" name="deliveryDate" v-model="deliveryDate">
    </div>
    <br>
    <div class="form-group">
        <label for="doorsAvailable">Nombre de portes</label>
        <select name="doorsAvailable" v-model="doorsAvailable">
            <option value="{{ d }}" v-for="(d, index) in doorsAvailableList" :key="index">{{ d }}</option>
        </select>
    </div>
    <br>
    <div class="form-group">
        <label for="mileage">Kilométrage</label>
        <input type="number" name="mileage" v-model="mileage">
    </div>
    <div class="form-group">
        <h6 class="display-6">Moteurs</h6>
        <button class="btn btn-primary" @click.prevent="addEngine">Ajouter un moteur</button>
        <div class="form-group">
            <div v-for="(e, index) in engines" :key="index">
                <label for="engineCode">Nom du moteur / Code moteur</label>
                <input type="text" name="engineCode" v-model="e.engineCode">

                <label for="cylinderCapacity">Cylindrée</label>
                <input type="number" name="cylinderCapacity" v-model="e.cylinderCapacity">

                <label for="numberOfCylinders">Nombre de cylindres</label>
                <input type="number" name="numberOfCylinders" v-model="e.numberOfCylinders">

                <label for="cylinderArchitecture">Architecture moteur</label>
                <input type="text" name="cylinderArchitecture" v-model="e.cylinderArchitecture">

                <label for="horsepower">Puissance (ch)</label>
                <input type="number" name="horsepower" v-model="e.horsepower">

                <label for="timingBeltType">Type de distribution</label>
                <input type="text" name="timingBeltType" v-model="e.timingBeltType">

                <label for="injectionType">Type d'injection</label>
                <input type="text" name="injectionType" v-model="e.injectionType">

                <label for="camshaftNumber">Nombre d'arbres à cames</label>
                <input type="number" name="camshaftNumber" v-model="e.camshaftNumber">

                <label for="fuel">Carburant</label>
                <input type="text" name="fuel" v-model="e.fuel">

                <label for="fuelCapacity">Capacité du réservoir (L)</label>
                <input type="number" name="fuelCapacity" v-model="e.fuelCapacity">

                <label for="topSpeed">Vitesse maximale</label>
                <input type="number" name="topSpeed" v-model="e.topSpeed">

                <label for="consumptionByHundredKilometers">Consommation (L/100km)</label>
                <input type="number" name="consumptionByHundredKilometers" v-model="e.consumptionByHundredKilometers">
            </div>
        </div>
    </div>
    <br>
    <div class="form-group">
        <h6 class="display-6">Boîte de vitesses</h6>
        <button class="btn btn-primary" @click.prevent="addGearbox">Ajouter une boîte de vitesses</button>
        <div class="form-group">
            <div v-for="(g, index) in gearboxes" :key="index">
                <label for="numberOfGears">Nombre de vitesses</label>
                <input type="number" name="numberOfGears" v-model="g.numberOfGears">

                <label for="type">Type de boîte de vitesse</label>
                <input type="text" name="type" v-model="g.type">

                <label for="automaticTechnology">Technologie de boîte automatique</label>
                <input type="text" name="automaticTechnology" v-model="g.automaticTechnology">
            </div>
        </div>
    </div>
    <br>
    <div class="form-group">
        <h6 class="display-6">Pneumatiques</h6>
        <button class="btn btn-primary" @click.prevent="addWheel">Ajouter un pneu</button>
        <div class="form-group">
            <div v-for="(w, index) in wheels" :key="index">
                <label for="tyreWidth">Largeur du pneu</label>
                <input type="number" name="tyreWidth" v-model="w.tyreWidth">

                <label for="tyreRatio">Ratio du pneu</label>
                <input type="number" name="tyreRatio" v-model="w.tyreRatio">

                <label for="rimSize">Taille de la jante</label>
                <input type="number" name="rimSize" v-model="w.rimSize">
            </div>
        </div>
    </div>
  </form>
</template>

<script>
import baseUrl from '@/api/carSaverApi';

export default {
    name: 'CarCreator',
    data() {
        return {
            brand: '',
            model: '',
            carCategoryList: ['Citadine', 'Compacte', 'Coupé', 'Berline', 'SUV', 'Monospace', 'Cabriolet', 'Sportive', 'Supersportive', 'Hypercar'],
            category: '',
            deliveryDate: '',
            doorsAvailable : '',
            doorsAvailableList : ['2', '3/5', '5'],
            mileage: 0,
            engines: [{
                engineCode: '',
                cylinderCapacity: 0,
                numberOfCylinders: 0,
                cylinderArchitecture: '',
                horsepower: 0,
                timingBeltType: '',
                injectionType: '',
                camshaftNumber: 0,
                fuel: '',
                fuelCapacity: 0,
                topSpeed: 0,
                consumptionByHundredKilometers: 0
            }],
            gearboxes: [{
                numberOfGears: 0,
                type: '',
                automaticTechnology: ''
            }],
            wheels: [{
                tyreWidth: 0,
                tyreRatio: 0,
                rimSize: 0
            }]
        }
    },
    methods: {
        addEngine() {
            this.engines.push({
                engineCode: '',
                cylinderCapacity: 0,
                numberOfCylinders: 0,
                cylinderArchitecture: '',
                horsepower: 0,
                timingBeltType: '',
                injectionType: '',
                camshaftNumber: 0,
                fuel: '',
                fuelCapacity: 0,
                topSpeed: 0,
                consumptionByHundredKilometers: 0
            })
        },
        addGearbox() {
            this.gearboxes.push({
                numberOfGears: 0,
                type: '',
                automaticTechnology: ''
            })
        },
        addWheel() {
            this.wheels.push({
                tyreWidth: 0,
                tyreRatio: 0,
                rimSize: 0
            })
        },
        deleteEngine(index) {
            this.engines.splice(index, 1)
        },
        deleteGearbox(index) {
            this.gearboxes.splice(index, 1)
        },
        deleteWheel(index) {
            this.wheels.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
}
</style>