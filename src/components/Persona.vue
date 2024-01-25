<template>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
  
      <p class="mt-3">Current Page: {{ currentPage }}</p>
  
      <b-table
        id="my-table"
        :items="personas"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </div>
  </template>
  
  <script>
import PersonaAxios from './services/PersonaAxios';

    export default {
      data() {
        return {
          perPage: 3,
          currentPage: 1,
         personas:[],

        }
      },
      mounted(){ 
        this.obtenerPersonas()
      },
      methods:{
        async obtenerPersonas(){
            try {
                const data = await PersonaAxios.obtenerPersonasPaginadas(
                    parseInt(this.currentPage),
                    parseInt(this.perPage)
                );
                // const personasData = data.content
                // console.log(personasData)
                this.personas = data.content;
                console.log(this.personas)
            } catch (error) {
                console.log(error)
            }
        }
      },
      computed: {
        rows() {
          return this.personas.length
        }
      }
    }
  </script>