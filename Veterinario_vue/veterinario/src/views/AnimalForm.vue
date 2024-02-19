<template>
  <h1> {{ title }}</h1>
    <p> ID del animal: {{ animal.id }}</p>
    <input>
    <p>Nombre del animal: {{ animal.nombre }}</p>

    <p>Sexo del animal: {{ animal.sexo }}</p>

    <p>Número de registro: {{ animal.numreg }}</p>
    <label for="tipo">Tipo:</label>
    <select id="tipo" name="tipo" required>
      <option value="gato">Gato</option>
      <option value="perro">Perro</option>
      <option value="caballo">Caballo</option>
    </select>

    <button @click="guardar">Guardar animal</button>
</template>

<script>
import GetAnimals from '@/components/GetAnimals.vue';
export default {
  name: 'AnimalForm',
  data() {
    return {
      title: '',
      animal: {
        id: '',
        nombre: '',
        sexo: '',
        numreg: '',
        tipo: '',
      }
    } 
  },
  components: {
    GetAnimals
},
methods: {
  guardar() {
    fetch('http://34.90.153.139/ejercicios/veterinario/save.php', {
      method: 'POST',
      body: JSON.stringify({
        nombre: this.animal.nombre,
        sexo: this.animal.sexo,
        numeroRegistro: this.animal.numreg,
        tipo: this.animal.tipo
      }
      )
    })
  }
},
async created(){
  const idAnimal = this.$route.params.id;
  if (idAnimal) {
    this.title = 'Editar animal';
    //const animalesFetch = await fetch("http://34.90.153.139/ejercicios/veterinario/getanimals.php");
    //const animales = await animalesFetch.json();
    const peticion = await this.$axios.get("http://34.90.153.139/ejercicios/veterinario/getanimals.php");
    this.animales = peticion;
    const animal = animales.find(a=>a.id == idAnimal);
    this.animal = {
      id: animal.id,
      nombre: animal.nombre,
      sexo: animal.sexo,
      numReg: animal.numeroRegistro,
      tipo: animal.tipo
    }
  }
  else {
    this.title = 'Crear animal';
  }
}
}
</script>