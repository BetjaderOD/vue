<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Electronicos</h1>
    <form @submit.prevent="submitForm">
      <label for="name">
        Nombre:
      </label>
      <br>
      <input type="text" id="name" v-model="form.name" required>

      <br>
      <div class="frc-captcha" ref="container" data-sitekey="FCMJFL85J8RD5KAN" data-lang="es">

      </div>
      <br>
      <b-button type="submit">Enviar</b-button>
    </form>
    <br>
    <b-button to="/juegos">Juegos</b-button>
  </div>
</template>

<script>
import { WidgetInstance } from "friendly-challenge";
import { ref } from "vue"
import CaptchaService from '../services/captchaService'

export default {
  data() {
    return {
      container: ref("container"),
      widget: ref(),
      form: {
        name: "",
        capchaToken: null
      },
      items: [
        {
          text: "Inicio",
          to: "inicio",
          name: 'inicio'
        },
        {
          text: "Electronicos",
          to: "electronicos",
          name: 'electronicos',
          active: 'true'

        },
        {
          text: "Juegos",
          to: "juegos",
          name: 'juegos',
        },
      ],
    };
  },
  methods: {
    submitForm: () => { },
    doneCallback: (solution) => {
      console.log('Captcha was solved. The form can be submitted.');
      console.log(solution);
    },
    async verifyCaptcha(solution) {

      let response = await CaptchaService.verificarCaptcha(solution)
      console.log(response)
    },
    doneCallback(solution) {
      this.verifyCaptcha(solution)
    },
    errorCallback: (err) => {
      console.log('There was an error when trying to solve the Captcha.');
      console.log(err);
    },
  },



  mounted() {
    if (this.$refs.container) {
      this.widget = new WidgetInstance(this.$refs.container, {
        startMode: "auto",
        doneCallback: this.doneCallback,
        errorCallback: this.errorCallback
      })
    }
  },
  beforeDestroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
</script>
