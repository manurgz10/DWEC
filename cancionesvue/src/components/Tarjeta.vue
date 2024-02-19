<template>
    <div class="card">
            <h1 class="card-title">{{cancion.titulo}}</h1>
        <div class="card-body">
            <p class="card-text">{{cancion.fecha}}</p>
        </div>
      <slot></slot>
    </div>
</template>
<script>
export default {
props: {
    cancion: Object,
},
};
</script>