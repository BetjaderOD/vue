<template>
  <div id="Peliculas">

  <!-- Animacion  llamando a la funcion  -->
    <h1 ref="heading" @click="applyBounceAnimation">Peliculas <span style="color: red; font-weight: 500;">
        ¡¡¡PRESIONAME!!!</span></h1>


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
          <!-- Cargar los elementos de categorias -->
          <b-form-select id="categorias" v-model="peliculaSeleccionada.categoria.id" :options="form.categorias"
            @change="onCategoriaChange"></b-form-select>

          <br>
          <br>
        </b-form-group>
        <b-button type="submit" variant="primary">Editar</b-button>
      </b-form>
      <div v-if="formError" class="alert alert-danger">{{ formError }}</div>
    </b-modal>
    <!-- Formulario arrastrar -->
    <div class="row">

      <!-- 
    Esta es una zona de suelta donde puedes arrastrar elementos. 
    Al soltar un elemento aquí, se ejecutará la función 'onDrop($event)'.
-->

 <div class="drop-zone-1 col " @drop="onDrop($event)" @dragstart="startDrag($event)">
    
    <!-- 
        Este div es el elemento que se mostrará cuando 'showElement' sea verdadero.
        Tiene la clase 'drag-el' para aplicar estilos de arrastre.
        El atributo 'draggable' permite que este elemento sea arrastrable.
        Cuando se inicia el arrastre, se ejecuta la función 'startDrag($event)'.
    -->
    <div v-show="showElement" class="drag-el" style="background-color: rgb(179, 179, 247);" draggable
        @dragstart="startDrag($event)">

          <div class="container text-center mt-5">
            <h1>Formulario</h1>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

              <b-form-group id="input-group-1" label-for="input-1">
                <br>
                <b-form-input id="input-1" v-model="form.titulo" type="text" placeholder="Ingresa el titulo " required />
                <br>
                <b-form-input id="input-2" v-model="form.director" type="text" placeholder="Ingresa el Director"
                  required />
                <br>
                <b-form-input id="input-3" v-model="form.enlace" type="text"
                  placeholder="Ingresa el enlace de la imagen" />
                <br>

                <b-form-input id="input-4" v-model="form.duracion" type="text" placeholder="Ingresa duracion" required />
                <br>
                <label class="mx-1" for="categorias">Selecciona la categoria</label>
                   <!-- Identificador del componente, Valor seleccionado vinculado a una propiedad, Lista de opciones disponibles  -->
                <b-form-select id="categorias" v-model="form.selected" :options="form.categorias"></b-form-select>
                <br>
                <br>
              </b-form-group>

              <b-button type="submit" variant="primary">Guardar</b-button>
            </b-form>

            <div v-if="formError" class="alert alert-danger">{{ formError }}</div>
          </div>
        </div>
      </div>

<!-- 
  
    Cuando se produce un evento de soltar, se activa la función 'onDrop($event)'.
    Los eventos 'dragover' y 'dragenter' se previenen por defecto para permitir soltar elementos.
-->
      <div class=" col drop-zone" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
        <h4>Suelta el formulario aqui para realizar en envio o usa el boton "Guardar"</h4>
      </div>
    </div>

    <div>
      <b-row>
       <!-- 
    Utilizando 'v-for' para iterar sobre el array 'peliculas'.
    ':key="pelicula.id"' asegura que cada elemento iterado tenga una clave única basada en su ID -->
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
import { bounce } from '@asika32764/vue-animate';

export default {
  data() {
    return {
      // Variable para mostrar u ocultar el scroll 
      showElement: true,
// Variable para guardar la posicion del scroll
      lastScrollPosition: 0,
      // Formulario para agregar una película donde se guardan los datos y las categorias
      form: {
        titulo: '',
        director: '',
        enlace: '',
        duracion: '',
        selected: null,
        categorias: [],
      },
      // Variable para mostrar el error del formulario
      show: true,
      formError: '',
      // Variable para guardar las películas
      peliculas: [],
      // Variable para guardar la película seleccionada para editar
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
  // Metodo para obtener las peliculas y las categorias
  mounted() {
    // Llamada a la funcion obtenerPeliculas
    this.obtenerPeliculas();
    // Llamada a la funcion obtenerCategorias
    this.obtenerCategorias();
    // Evento para el scroll
    window.addEventListener("scroll", this.onScroll);

  },
  // Metodo para eliminar el evento del scroll
  beforeDestroy() {
    // Elimina el evento del scroll
    window.removeEventListener("scroll", this.onScroll);
  },
  // Metodo para aplicar la animacion
  methods: {
// Metodo para aplicar la animacion
    applyBounceAnimation() {
      // Accede al elemento h1 utilizando refs
      const element = this.$refs.heading;

      // Aplica la animación de "bounce" al elemento h1
      bounce(element);
    },

    // Metodo para el evento de soltar
    onDrop(event) {
      console.log('Soltado');
      console.log(event);
      // Llamada a la funcion onSubmit
      this.onSubmit();

    },
// Metodo para el evento de arrastrar
    startDrag(event) {
      console.log('Drag started');
      console.log(event);
    },

    //metodo para obtener las peliculas
    async obtenerPeliculas() {

      try {
        // Llamada a la funcion obtenerPeliculas de peliculasAxios
        const data = await peliculasAxios.obtenerPeliculas();
        // Guarda las peliculas en la variable peliculas
        this.peliculas = data.object;
      } catch (error) {
        console.error('Error al obtener las películas', error);
      }
    },
    // Metodo para el onScroll
    onScroll() {
// Variable para guardar la posicion del scroll 
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      console.log(currentScrollPosition);
// Si la diferencia entre la posicion actual y la ultima posicion es menor a 20
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 20) {
        // No hace nada
        return;
      }
// Si la posicion actual es menor a la ultima posicion
      this.showElement = currentScrollPosition < this.lastScrollPosition;
// Guarda la posicion actual en la ultima posicion
      this.lastScrollPosition = currentScrollPosition;
    },
    // Metodo para obtener las categorias
    async obtenerCategorias() {
      try {
        // Llamada a la funcion obtenerCategorias de peliculasAxios
        const data = await peliculasAxios.obtenerCategorias();
        // Guarda las categorias en la variable categorias y las mapea por su id y nombre
        this.form.categorias = data.object.map(categoria => ({ value: categoria.id, text: categoria.nombre }));
      } catch (error) {
        console.error('Error al obtener las categorias', error);
      }
    },
    // Metodo para eliminar una pelicula a traves de su id
    async eliminarPelicula(id) {

      try {
        // Llamada a la funcion eliminarPelicula de peliculasAxios
        await peliculasAxios.eliminarPelicula(id);
        // Llamada a la funcion obtenerPeliculas para actualizar la lista de peliculas
        this.obtenerPeliculas();

        alert('Película eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar la película', error);
        alert('Error al eliminar la película');
      }
    },
    // Metodo para abrir el modal de editar pelicula
    abrirModalEditar(pelicula) {
      // Guarda la pelicula seleccionada en la variable peliculaSeleccionada
      this.peliculaSeleccionada = { ...pelicula };
      // Muestra el modal de editar
      this.$bvModal.show('modal-editar');

    },
    // Metodo para editar una pelicula a la que se le pasa el evento para 
    async editarPelicula(event) {
      //Permite prevenir el comportamiento por defecto de un evento 
      event.preventDefault();
// Si el formulario no es valido
      if (!this.validateForm()) {
        // No hace nada
        return;

      }
      try {
        // Llamada a la funcion editarPelicula de peliculasAxios
        await peliculasAxios.editarPelicula(
          // Se le pasa el id, titulo, director, duracion, enlace y categoria de la pelicula seleccionada
          this.peliculaSeleccionada.id,
          this.peliculaSeleccionada.titulo,
          this.peliculaSeleccionada.director,
          this.peliculaSeleccionada.duracion,
          this.peliculaSeleccionada.enlace,
          this.peliculaSeleccionada.categoria.id
        );
        alert('Película editada correctamente');
        // Llamada a la funcion obtenerPeliculas para actualizar la lista de peliculas
        this.obtenerPeliculas();
        // Oculta el modal de editar
        this.$bvModal.hide('modal-1');
      } catch (error) {
        console.error('Error al editar la película', error);
        alert('Error al editar la película');
      }
      // Resetea el formulario
      this.resetForm();
    },
    // Metodo para validar el formulario
    async onSubmit(event) {
      // event.preventDefault();
      // Si el formulario no es valido
      if (!this.validateForm()) {
        // No hace nada
        return;
      }
      // Llamada a la funcion crearPelicula de peliculasAxios
      try {
        // Se le pasa el titulo, director, duracion, enlace y categoria del formulario
        await peliculasAxios.crearPelicula(this.form.titulo, this.form.director, this.form.duracion, this.form.enlace, this.form.selected);

        alert('Formulario enviado correctamente');
        this.obtenerPeliculas();
      } catch (error) {
        console.error('Error al enviar el formulario', error);
        alert('Mal');
      }

      this.resetForm();
    },
    // Metodo para validar el formulario
    validateForm() {
      
      this.formError = '';
      return true;
    },
    onReset(event) {
      event.preventDefault();
      this.resetForm();
    },
    resetForm() {
      // Resetea el formulario
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

<style>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drop-zone {
  background-color: rgb(254, 149, 149);
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>