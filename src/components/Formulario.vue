<template>
  <div class="container">
    <h1>Formulario</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Datos Personales" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Ingresa tu nombre" required />
        <b-form-input id="input-2" v-model="form.apellido_p" type="text" placeholder="Ingresa tu apellido paterno"
          required />
        <b-form-input id="input-3" v-model="form.apellido_m" type="text" placeholder="Ingresa tu apellido materno" />
      </b-form-group>

      <b-form-group id="input-group-2" label="Dirección" label-for="input-4">
        <b-form-input id="input-4" v-model="form.cp" type="number" placeholder="Ingresa tu CP" required />
        <b-form-input id="input-5" v-model="form.calle" type="text" placeholder="Ingresa tu Calle" required />
        <b-form-input id="input-6" v-model="form.numero" type="number" placeholder="Ingresa tu Numero" required />
        <b-form-input id="input-7" v-model="form.ciudad" type="text" placeholder="Ingresa tu ciudad " required />
      </b-form-group>

      <b-form-group id="input-group-3" label="Fecha de Nacimiento" label-for="input-8">
        <b-form-datepicker id="input-8" v-model="form.fechaNacimiento" :max="maxDate" required></b-form-datepicker>
      </b-form-group>

      <b-form-group id="input-group-4" label="Contacto" label-for="input-9">
        <b-form-input id="input-9" v-model="form.correo" type="email" placeholder="Ingresa tu correo electronico"
          required />
        <b-form-input id="input-10" v-model="form.telefono" type="number" placeholder="Ingresa tu número telefonico"
          required />
        <label for="">Fotografia</label>
        <input type="file" @change="onFile" multiple>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
    </b-form>

    <div v-if="formError" class="alert alert-danger">{{ formError }}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        apellido_p: '',
        apellido_m: '',
        cp: '',
        calle: '',
        numero: '',
        ciudad: '',
        fechaNacimiento: null,
        correo: '',
        telefono: '',
        foto: '',
        checked: []
      },
      maxDate: new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
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
    onReset(event) {
      event.preventDefault();
      this.resetForm();
    },
    onFile(event) {
      const file = event.target.files[0];
      if (file.size > 3 * 1024 * 1024) {
        this.formError = 'El tamaño de la fotografa debe ser menor a 3 MB';
      } else {
        this.formError = '';
      }
    },
    validateForm() {

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.correo)) {
        this.formError = 'Ingresa un crreo electronico valido';
        return false;
      }

      if (this.form.telefono.length !== 10) {
        this.formError = 'El numero telefonico debe tener 10 caracteres';
        return false;
      }

      this.formError = '';
      return true;
    },
    previewFiles(event) {
      console.log(event.target.files);
    },
    resetForm() {
      this.form = {
        name: '',
        apellido_p: '',
        apellido_m: '',
        cp: '',
        calle: '',
        numero: '',
        ciudad: '',
        fechaNacimiento: null,
        correo: '',
        telefono: '',
        foto: '',
        checked: []
      };
      this.formError = '';
    }
  }
}
</script>

<style></style>
