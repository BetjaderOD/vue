<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Electronicos</h1>
    <b-button href="/juegos">I am a Link</b-button>

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
          name:'inicio'
        },
        {
          text: "Electronicos",
          href: "/electronicos",
          name:'electronicos',
          active: 'true'
        },
        {
          text: "Juegos",
          href: "/juegos",
          name:'juegos'
        },
      ],
    };
  },

}
</script>

<style>

</style>