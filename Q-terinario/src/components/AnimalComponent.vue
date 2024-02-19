<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="animal in animales"
        :key="animal.id"
        expand-separator
        icon="pets"
        :label="animal.nombre"
        :caption="animal.sexo"
      >
        <q-card>
          <q-card-section>
            Registro: {{ animal.numeroRegistro }}
            <br />
            Tipo: {{ animal.tipo }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "AnimalComponent",
  data() {
    return {
      animales: "",
    };
  },
  mounted() {
    this.getAnimals();
  },
  methods: {
    async getAnimals() {
      let response = await axios.get(
        "http://34.90.153.139/ejercicios/veterinario/getanimals.php"
      );
      this.animales = response.data;
    },
  },
});
</script>
