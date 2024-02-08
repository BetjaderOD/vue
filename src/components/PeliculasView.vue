<template>
    <div id="Peliculas" class="
    ">
    <h1>Peliculas</h1>
    
    <b-button  v-b-modal.modal-1     variant="outline-primary">Agregar al catalogo</b-button>
    <br>
    <b-modal id="modal-1" title="Agregar pelicula">
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">

<b-form-group id="input-group-1"  label-for="input-1">
    <br>
  <b-form-input id="input-1" v-model="form.titulo" type="text" placeholder="Ingresa el titulo " required />
  <br>
  <b-form-input id="input-2" v-model="form.director" type="text" placeholder="Ingresa el Director"
    required />
    <br>
  <b-form-input id="input-3" v-model="form.link" type="text" placeholder="Ingresa el link de la imagen" />
  <br>
  
  <b-form-input id="input-4" v-model="form.duracion" type="text" placeholder="Ingresa duracion" required />
  <br>
  <label class="mx-1" for="categorias">Selecciona la categoria</label>
  <b-form-select  id="categorias" v-model="selected"  :options="form.categorias"></b-form-select>
<br>
  <br>
</b-form-group>
 



<b-button type="submit" variant="primary">Agregar</b-button>
</b-form>

<div v-if="formError" class="alert alert-danger">{{ formError }}</div>

  </b-modal>
    <b-container class="bv-example-row">
        <br>
  <b-row>
    <b-col>
        <div>
  <b-card
    no-body
    style="max-width: 20rem;"
    img-src="https://areajugones.sport.es/wp-content/uploads/2021/07/spacejam2-1080x609.jpg "
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">TItulo</h4>
    </template>

    <b-card-body>
      
        <b-card-sub-title class="mb-2">Director</b-card-sub-title>
        <b-card-sub-title class="mb-2">Categoria</b-card-sub-title>
        <b-card-sub-title class="mb-2">direccion    </b-card-sub-title>
        
    </b-card-body>



   
  </b-card>
</div>
    </b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>
</div>

</template>

<script>
export default {
    data() {
    return {
      form: {
        titulo: '',
        director: '',
        link: '',
        duracion: '',
        selected: null,
        categorias: [ { value: 'a', text: 'Estatico' },],
       
      },
      show: true,
      formError: ''
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (!this.validateForm()) {
        return;
      }

      alert('Formulario enviado correctamente');
      
      this.resetForm();
    },
    validateForm() {


this.formError = '';
return true;
},
    onReset(event) {
      event.preventDefault();
      this.resetForm();
    },
  
    resetForm() {
      this.form = {
        titulo: '',
        director: '',
        link: '',
        duracion: '',
        categorias: [],
        
      };
      this.formError = '';
    }
  }

}
</script>

<style>

</style>