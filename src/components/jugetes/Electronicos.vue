<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Electronicos</h1>
    <b-button to="/juegos">Juegos</b-button>
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
          text: "Electronicos",
          to: "electronicos",
          name: 'electronicos',
          active: 'true'

        },
        {
          text: "Juegos",
          to: "juegos",
          name: 'juegos',
        },
      ],
    };
  },
}
</script>
