<template>
    <div>
      <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
        <h1>Hola inicio</h1>
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
          text: "harden",
          href: "/harden",
          name:'harden'
        },
        {
          text: "zachlavine",
          href: "/zachlavine",
          name:'zachlavine'
        },
      ],
    };
  },
};
</script>

<style>

</style>