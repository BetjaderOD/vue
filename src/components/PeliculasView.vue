<template>
  <div id="Peliculas">
    <h1>Peliculas</h1>

    <b-button v-b-modal.modal-1 variant="outline-primary">Agregar al catalogo</b-button>
    <br>
    <br>
    <b-modal id="modal-1" title="Agregar pelicula">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="input-group-1" label-for="input-1">
          <br>
          <b-form-input id="input-1" v-model="form.titulo" type="text" placeholder="Ingresa el titulo " required />
          <br>
          <b-form-input id="input-2" v-model="form.director" type="text" placeholder="Ingresa el Director" required />
          <br>
          <b-form-input id="input-3" v-model="form.enlace" type="text" placeholder="Ingresa el enlace de la imagen" />
          <br>

          <b-form-input id="input-4" v-model="form.duracion" type="text" placeholder="Ingresa duracion" required />
          <br>
          <label class="mx-1" for="categorias">Selecciona la categoria</label>
          <b-form-select id="categorias" v-model="form.selected" :options="form.categorias"></b-form-select>
          <br>
          <br>
        </b-form-group>

        <b-button type="submit" variant="primary">Guardar</b-button>
      </b-form>

      <div v-if="formError" class="alert alert-danger">{{ formError }}</div>

    </b-modal>
    <b-modal id="modal-editar" title="Editar película">
      <b-form @submit="editarPelicula" @reset="resetForm">
        <b-form-group id="input-group-1" label-for="input-1">
          <br>
          <b-form-input id="input-1" v-model="peliculaSeleccionada.titulo" type="text" placeholder="Ingresa el titulo "
            required />
          <br>
          <b-form-input id="input-2" v-model="peliculaSeleccionada.director" type="text" placeholder="Ingresa el Director"
            required />
          <br>
          <b-form-input id="input-3" v-model="peliculaSeleccionada.enlace" type="text"
            placeholder="Ingresa el enlace de la imagen" />
          <br>
          <b-form-input id="input-4" v-model="peliculaSeleccionada.duracion" type="text" placeholder="Ingresa duracion"
            required />
          <br>
          <label class="mx-1" for="categorias">Selecciona la categoria</label>
          <b-form-select id="categorias" v-model="peliculaSeleccionada.categoria.id" :options="form.categorias"
            @change="onCategoriaChange"></b-form-select>

          <br>
          <br>
        </b-form-group>
        <b-button type="submit" variant="primary">Editar</b-button>
      </b-form>
      <div v-if="formError" class="alert alert-danger">{{ formError }}</div>
    </b-modal>
    <div>
      <b-row>
        <b-col cols="12" md="4" v-for="(pelicula, index) in peliculas" :key="pelicula.id">
          <b-card no-body style="max-width: 20rem;" class="mb-3">
            <img :src="pelicula.enlace" class="card-img-top" alt="...">
            <b-card-body>
              <h5 class="card-title">{{ pelicula.titulo }}</h5>
              <p class="card-text">Director: {{ pelicula.director }}</p>
              <p class="card-text">Categoría: {{ pelicula.categoria.nombre }}</p>
              <p class="card-text">Duración: {{ pelicula.duracion }}</p>
              <b-button @click="abrirModalEditar(pelicula)" variant="outline-primary">Editar</b-button>
              <b-button class='mx-2' @click="eliminarPelicula(pelicula.id)" variant="outline-danger">Eliminar</b-button>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
import peliculasAxios from './services/PeliculasAxios'

export default {
  data() {
    return {
      form: {
        titulo: '',
        director: '',
        enlace: '',
        duracion: '',
        selected: null,
        categorias: [],
      },
      show: true,
      formError: '',
      peliculas: [],
      peliculaSeleccionada: {
        id: '',
        titulo: '',
        director: '',
        enlace: '',
        duracion: '',
        categoria: { nombre: '' }
      }
    }
  },
  mounted() {
    this.obtenerPeliculas();
    this.obtenerCategorias();
  },
  methods: {
    async obtenerPeliculas() {
      try {
        const data = await peliculasAxios.obtenerPeliculas();
        this.peliculas = data.object;
      } catch (error) {
        console.error('Error al obtener las películas', error);
      }
    },

    async obtenerCategorias() {
      try {
        const data = await peliculasAxios.obtenerCategorias();
        this.form.categorias = data.object.map(categoria => ({ value: categoria.id, text: categoria.nombre }));
      } catch (error) {
        console.error('Error al obtener las categorias', error);
      }
    },
    async eliminarPelicula(id) {
      try {
        await peliculasAxios.eliminarPelicula(id);
        this.obtenerPeliculas();
        alert('Película eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar la película', error);
        alert('Error al eliminar la película');
      }
    },
    abrirModalEditar(pelicula) {
      this.peliculaSeleccionada = { ...pelicula };
      this.$bvModal.show('modal-editar');

    },
    async editarPelicula(event) {
      event.preventDefault();

      if (!this.validateForm()) {
        return;
      }
      try {
        await peliculasAxios.editarPelicula(
          this.peliculaSeleccionada.id,
          this.peliculaSeleccionada.titulo,
          this.peliculaSeleccionada.director,
          this.peliculaSeleccionada.duracion,
          this.peliculaSeleccionada.enlace,
          this.peliculaSeleccionada.categoria.id
        );
        alert('Película editada correctamente');
        this.obtenerPeliculas();
        this.$bvModal.hide('modal-1');
      } catch (error) {
        console.error('Error al editar la película', error);
        alert('Error al editar la película');
      }

      this.resetForm();
    },
    async onSubmit(event) {
      event.preventDefault();

      if (!this.validateForm()) {
        return;
      }
      try {
        await peliculasAxios.crearPelicula(this.form.titulo, this.form.director, this.form.duracion, this.form.enlace, this.form.selected);
        alert('Formulario enviado correctamente');
        this.obtenerPeliculas();
      } catch (error) {
        console.error('Error al enviar el formulario', error);
        alert('Mal');
      }

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
        enlace: '',
        duracion: '',
        selected: null,
        categorias: this.form.categorias
      };
      this.formError = '';
    }
  }
}
</script>

<style></style>
