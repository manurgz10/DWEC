<template>
  <q-item to="/#" exact>
    <q-item-section avatar>
      <q-icon name="home" />
    </q-item-section>

    <q-item-section> Index </q-item-section>
  </q-item>

  <q-item to="/animals" exact>
    <q-item-section avatar>
      <q-icon name="pets" />
    </q-item-section>

    <q-item-section> Animal list </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
