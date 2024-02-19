<template>
    <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit.prevent="sendform" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="animal.id"
          type="number"
          label="Animal ID *"
          hint="Leave blank for a new animal, enter a number to update an existing one"
        />
  
        <q-input
          filled
          v-model="animal.nombre"
          label="Name *"
          hint="Enter the animal's name"
          lazy-rules
          :rules="[(val) => (val && val.length > 1) || 'Please enter a valid name']"
        />
  
        <q-select
          filled
          v-model="animal.sexo"
          label="Sex *"
          :options="['M', 'F']"
          lazy-rules
          :rules="[(val) => (val === 'M' || val === 'F') || 'Please select a valid sex']"
        />
  
        <q-input
          filled
          v-model="animal.numeroRegistro"
          label="Registration Number *"
          hint="Enter the registration number"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please enter a registration number']"
        />
  
        <q-select
          filled
          v-model="animal.tipo"
          label="Type *"
          :options="['gato', 'perro', 'caballo']"
          lazy-rules
          :rules="[(val) => (['gato', 'perro', 'caballo'].includes(val)) || 'Please select a valid type']"
        />
    
        <div>
          <q-btn label="Submit"  type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </template>
  
  <script>
  import { useQuasar } from "quasar";
import { api } from "src/boot/axios";
  import { defineComponent, ref } from "vue";
  
  export default ({
    data() {
    return {
        animal: {
            id: '',
            nombre: '',
            sexo: '',
            numeroRegistro: '',
            tipo: '',
        }  
    };
  },
  methods: {
    sendform() {
        const headers = {
        // Add your custom headers here
        'Content-Type': 'application/json', // Example header
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example authorization header
        };
        this.$api.post('save.php', {
            id: this.animal.id,
            nombre: this.animal.nombre,
            sexo: this.animal.sexo,
            numeroRegistro: this.animal.numeroRegistro,
            tipo: this.animal.tipo
        }, {headers})
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });
    }
  }
})
  </script>
  