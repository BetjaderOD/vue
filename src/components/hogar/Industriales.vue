<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Industrial</h1>
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

        },
        {
          text: "Industriales",
          to: "industriales",
          name: 'industriales',
          active: 'true'

        },
      ],
    };
  },
}
</script>

<style></style>