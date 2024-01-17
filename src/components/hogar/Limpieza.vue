<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Limpieza</h1>
    <b-button to="/industriales">Industriales</b-button>
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
          text: "Limpieza",
          to: "limpieza",
          name: 'limpieza',
          active: 'true'

        },
        {
          text: "Indrustriales",
          to: "industriales",
          name: 'industriales',

        },
      ],
    };
  },
}
</script>

<style></style>