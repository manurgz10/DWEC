<template>
    <div>
        <tr>
            <slot></slot>
        </tr>
    </div>
</template>
  <script>
  export default {
    name: 'Fila'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  tr {
    background-color: rgb(220, 218, 218);
  }
  </style>
  