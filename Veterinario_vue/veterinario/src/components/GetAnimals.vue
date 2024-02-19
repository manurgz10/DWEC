<template>
  <div v-if="animalsDiv">
    <table class="table table-striped">
      <tr>
        <th>Nombre</th>
        <th>Sexo</th>
        <th>Número de registro</th>
        <th>Tipo</th>
        <th>Acciones</th>


      </tr>
      <tr v-for="animal in animals" :key="animal.id">
        <td>{{ animal.nombre }}</td>
        <td>{{ animal.sexo }}</td>
        <td>
          <span v-if="animal.numeroRegistro">{{animal.numeroRegistro}}</span>
          <span v-else> Sin registro</span>
        </td>
        <td>{{ animal.tipo }}</td>
        <td>
          <router-link to="/animal/:id">Editar animal</router-link>
        </td>
      </tr>
    </table>
  </div>

  <div v-if="editAnimal">
    <label for="">Nombre</label>
    <input type="text" name="nombre" :value="nombre" />
    <label for="sexo">Sexo</label>
    <input type="radio" name="sexo" value="M" v-model="sexo" />M
    <input type="radio" name="sexo" value="F" v-model="sexo" />F

    <label for="">Numero Registro</label>
    <input type="text" name="numreg" :value="numreg" />
  </div>
</template>

<script>
import router from '@/router';
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      animals: [],
      animal: null,
      editAnimal: false,
      animalsDiv: true,
      nombre: null,
      sexo: null,
      numreg: null,
    };
  },
  async mounted() {
    await fetch("http://34.90.153.139/ejercicios/veterinario/getanimals.php")
      .then((response) => response.json())
      .then((data) => {
        this.animals = data;
      });
  },
  methods: {
    getAnimal(id) {
      return this.animals.find((animal) => animal.id === id);
    },
  },
};
</script>
