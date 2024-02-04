<template>
  <div class="overflow-auto">
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table id="my-table" :items="personas" :per-page="perPage" :current-page="currentPage" :fields="fields"
      :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" :filter="filtro"
      @filtered="onFiltered" small></b-table>
  </div>
</template>
  
<script>
import PersonaAxios from './services/PersonaAxios';

export default {
  data() {
    return {
      filtro: null,
      sortBy: "name",
      sortDesc: false,
      perPage: 5,
      rows: 0,
      currentPage: 1,
      personas: [],
      fields: [
        { key: "name", label: "Nombre", sortable: true },
        { key: "firstname", label: "Apellido Paterno", sortable: true },
      ],
    };
  },
  mounted() {
    this.obtenerPersonas()
  },
  methods: {
    async obtenerPersonas() {
      try {
        const data = await PersonaAxios.obtenerPersonasPaginadas(
          parseInt(ctx.currentPage) - 1,
          parseInt(ctx.perPage),
          ctx.sortBy
        );
        // const personasData = data.content
        // console.log(personasData)
        this.rows = data.totalElements;
        return data.content;
      } catch (error) {
        console.log(error)
      }
    }
  },
  onFiltered(filteredItems) {
    this.currentPage = 1;
    this.rows = filteredItems.length;
  },
  computed: {
    rows() {
      return this.personas.length
    }
  }
}
</script>