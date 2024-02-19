<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-input
        standout="bg-primary text-white"
        v-model="data.titulo"
        label="Título"
      />
      <q-input
        standout="bg-secondary text-white"
        v-model="data.url"
        label="URL Imagen"
      />
      <q-date v-model="data.fecha" minimal />
    </div>
  </div>

  <div class="q-pa-md">
    <q-btn
      @click="enviar"
      class="bg-positive"
      style="color: white"
      label="Enviar"
    />
  </div>
</template>

<script>
import moment from "moment";
import { useQuasar } from "quasar";
import { Notify } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
  },
  data() {
    return {
      data: {
        titulo: "",
        url: "",
        fecha: moment().format("YYYY-MM-DD"),
      },
    };
  },
  methods: {
    enviar() {
      console.log(JSON.stringify(this.data));
      this.$api
        .post(
          "save.php",
          JSON.stringify({
            titulo: this.data.titulo,
            url: this.data.url,
            fecha: moment(this.data.fecha).format("YYYY-MM-DD"),
          })
        )
        .then(function (response) {
          Notify.create({
            type: "positive",
            message: "Operación realizada con éxito",
          });
        })
        .catch(function (error) {
          Notify.create({
            type: "negative",
            message: "Ha ocurrido un error",
          });
        });
    },
  },
};
</script>
