<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Juegos</h1>
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
          href: "/inicio",
          name: 'inicio'
        },
        {
          text: "Electronicos",
          href: "/electronicos",
          name: 'electronicos',

        },
        {
          text: "Juegos",
          href: "/juegos",
          name: 'juegos',
          active: 'true'
        },
      ],
    };
  },
}
</script>

<style></style>