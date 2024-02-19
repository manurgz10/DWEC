<template>
  <div class="container-fluid">
    <header>
      <div class="row">
        <input type="search" @input="filteredSongs()" v-model="busqueda" placeholder="Buscar letra">
        <button @click="filter(categoria.id)" v-for='categoria in categorias' :key="categoria.id" class="col-sm btn btn-danger btn-lg m-1" type="button">{{categoria.nombre}}</button>
      </div>
      <div class="row">
        <button class="col-sm btn btn-primary btn-lg m-1" @click="ordenarAscendente()" type="button">Order ascendente</button>
        <button class="col-sm btn btn-primary btn-lg m-1" @click="ordenarDescendente()" type="button">Order descendente</button>
      </div>
    </header>
    <main v-if="!busqueda && !cancionesFilter">
      <tarjeta v-for="cancion in canciones" :key="cancion.id" :cancion="cancion" class="cancion">
        <span>{{ cancion.letra }}</span>
      </tarjeta>
    </main>

    <main v-else>
      <tarjeta v-for="cancion in cancionesFilter" :key="cancion.id" :cancion="cancion" class="cancion">
        <span>{{ cancion.letra }}</span>
      </tarjeta>
    </main>
  </div>
</template>

<script>
import Tarjeta from '../components/Tarjeta.vue'; 

export default {
  components: { Tarjeta },
  data() {
    return {
      canciones: '',
      cancionesFilter: '',
      categorias: '',
      busqueda: '',
    }
  },
  methods: {
    async getCategories() {
      const response = await fetch('./bbdd/categorias.json');
      const data = await response.json();
      this.categorias = data;
    },
    async getCanciones() {
      const response = await fetch('./bbdd/canciones.json');
      const listacanciones = await response.json();
      this.canciones = listacanciones;
      this.cancionesFilter = listacanciones;
    },
    filter(categoriaId) {
      console.log(categoriaId)
      this.cancionesFilter = this.canciones.filter(cancion => cancion.categoria_id === categoriaId);
    },
    filteredSongs() {
      const busqueda = this.busqueda.toLowerCase();
      this.cancionesFilter = this.canciones.filter(cancion=>cancion.letra.toLowerCase().includes(busqueda));
      console.log(this.cancionesFilter);
      console.log(this.busqueda);
    },
    ordenarAscendente() {
      if (this.cancionesFilter === '') {
        this.canciones.sort(function(a,b) {
        return moment(a.fecha, 'YYYY-MM-DD').diff(moment(b.fecha, 'YYYY-MM-DD'))      
      })
      }
      else {
        this.cancionesFilter.sort(function(a,b) {
        return moment(a.fecha, 'YYYY-MM-DD').diff(moment(b.fecha, 'YYYY-MM-DD'))      
      })
      }

      console.log(this.cancionesFilter);

    },
    ordenarDescendente() {
      if (!this.cancionesFilter) {
        (this.canciones.sort(function(a,b) {
        return moment(b.fecha, 'YYYY-MM-DD').diff(moment(a.fecha, 'YYYY-MM-DD'))      
      }))
      }

      else {
        (this.cancionesFilter.sort(function(a,b) {
        return moment(b.fecha, 'YYYY-MM-DD').diff(moment(a.fecha, 'YYYY-MM-DD'))      
      }))
      }
    }
  },
  mounted() {
    this.getCategories();
    this.getCanciones();
  }
}
</script>

<style scoped lang="scss">

span{
  white-space: pre-line;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main div{
  margin: 50px auto;
  text-align: center;
}

div.cancion:nth-child(even){
  background-color: #EEEEEE;
}

</style>
