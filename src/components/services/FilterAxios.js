import axios from 'axios';


const base_url = 'http://localhost:8080/peliculas/';

const obtenerPeliculasConFiltro = async (nombre, director) => {
  const url = base_url + 'getWithFilter/' + nombre + '/' + director;
  console.log(url)
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error al obtener las peliculas');
    throw error;
  }


}

const obtenerPeliculasCategoria = async (categoria) => {
  const url = base_url + 'getWithCategoria/' + categoria;
  console.log(url)
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error al obtener las peliculas');
    throw error;
  }
}

const obtenerPeliculasFeha = async (fechaInicio, fechaFin) => {
  const url = base_url + 'getBetween/' + fechaInicio + '/' + fechaFin;
  console.log(url)
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error al obtener las peliculas');
    throw error;
  }
}

export default {
  obtenerPeliculasConFiltro,
  obtenerPeliculasCategoria,
  obtenerPeliculasFeha
};
