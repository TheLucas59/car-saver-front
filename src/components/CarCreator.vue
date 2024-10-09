<template>
  <h5 class="display-5">Ajouter une voiture</h5>
  <form action="{{ baseUrl }}/car">
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
            mileage: 0
        }
    }
}
</script>

<style>

</style>