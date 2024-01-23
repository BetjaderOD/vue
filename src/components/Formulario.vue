<template>
    <div class="container">

        <h1>Formulario</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
            id="input-group-1"
            label="Datos Personales"
            label-for="input-1"
            description="Aqui van tus datos personales"
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              placeholder="Ingresa tu nombre"
              required
            />
            <b-form-input
            id="input-1"
            v-model="form.apellido_p"
            type="text"
            placeholder="Ingresa tu apellido paterno"
            required
          />
          <b-form-input
            id="input-1"
            v-model="form.apellido_m"
            type="text"
            placeholder="Ingresa tu apellido materno"
            required
          >
        </b-form-input>
          </b-form-group>
          <b-form-group
          id="input-group-1"
          label="Direccion"
          label-for="input-1"
          description="Aqui van tus datos de direccion"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder="Ingresa tu CP"
            required
          />
          <b-form-input
          id="input-1"
          v-model="form.apellido_p"
          type="text"
          placeholder="Ingresa tu Calle"
          required
        />
        <b-form-input
          id="input-1"
          v-model="form.apellido_m"
          type="text"
          placeholder="Ingresa tu Numero"
          required
        />
        <b-form-input
          id="input-1"
          v-model="form.apellido_m"
          type="text"
          placeholder="Ingresa tu ciudad    "
          required
        >
      </b-form-input>
        </b-form-group>
        </b-form>

</div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          apellido_p: '',
          apellido_m: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

</style>