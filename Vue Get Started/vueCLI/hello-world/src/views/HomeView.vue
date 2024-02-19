<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TablaManu titulo="Usuarios"> 
      <Fila>
        <Columna @click="changeUser">{{user}}</Columna>
        <Columna @click="changeUser">{{userApellido}}</Columna>
      </Fila>
    </TablaManu>

    <TablaManu titulo="Vue">
      <Fila>
        <Columna>Probando</Columna>
        <Columna>Vue!</Columna>
      </Fila>
    </TablaManu>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TablaManu from '@/components/TablaManu.vue'
import Fila from '@/components/Fila.vue'
import Columna from '@/components/Columna.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TablaManu,
    Fila,
    Columna
  },
  data() {
    return {
      prueba: 'Hello vue',
      user: 'Manu',
      userApellido: 'Rodríguez'
    }
  },
  methods: {
    changeUser() {
      this.user = 'Pepito'
      this.userApellido = 'Los Palotes'
    }
  }
}

</script>
