<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Cocina</h1>
    <b-button to="/estufa">Estufas</b-button>
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
          active: 'true'

        },
        {
          text: "Estufa",
          to: "estufa",
          name: 'estufa',
        },
      ],
    };
  },
}
</script>

<style></style>