<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Estufas</h1>
    <b-button to="/inicio">Inicio</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "inicio",
          name: 'inicio'
        },
        {
          text: "Cocina",
          to: "cocina",
          name: 'electronicos',

        },
        {
          text: "Estufa",
          to: "estufa",
          name: 'estufa',
          active: 'true'

        },
      ],
    };
  },

}
</script>

<style></style>