<template>
  <q-page >
    <div class="row">
      <q-table
        title="Animals"
        :rows="animals"
        :columns="columns"
        row-key="id"
        class="col"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      columns: [
        {
          name: "id",
          label: "Id del animal",
          field: "id",
          align: "left",
          sortable: true,
        },
        {
          name: "nombre",
          label: "Nombre del animal",
          field: "nombre",
          align: "left",
          sortable: true,
        },
        {
          name: "sexo",
          label: "Sexo",
          field: "sexo",
          align: "left",
          sortable: true,
        },
        {
          name: "tipo",
          label: "Tipo",
          field: "tipo",
          align: "left",
          sortable: true,
        },
        {
          name: "numeroRegistro",
          label: "Num. Registro",
          field: "numeroRegistro",
          align: "left",
          sortable: true,
        },
      ],
      animals: []
    };
  },
  mounted() {
    this.getAnimals()
  },
  methods: {
    async getAnimals() {
      await this.$api.get('getanimals.php')
      .then((result) => {
        this.animals = result.data;
        this.animals.forEach(animal => {
          if (!animal.numeroRegistro) {
            animal.numeroRegistro = 'No existe'
          }
        });
        console.log(result.data);
      }).catch((err) => {
        console.log('Ha ocurrido un error:' + err);
      });
    },
  }
});
</script>
