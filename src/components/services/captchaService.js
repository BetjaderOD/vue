import axios from 'axios';

const API_URL = 'http://localhost:8080/api/captcha/verificar-captcha'

const CaptchaService = {
  verificarCaptcha(solution) {
    const params = {
      solution: solution,
    };

    return axios.post(API_URL, null, { params: params })
      .then(response => response.data)
      .catch(error => {
        console.error('Error al verificar el captcha:', error);
        throw error;
      });
  }
};

export default CaptchaService;