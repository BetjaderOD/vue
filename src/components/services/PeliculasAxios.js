import axios from "axios";

const base_url = 'http://localhost:8080/peliculas/'

const crearPelicula = async (titulo, director, duracion, enlace, categoriaId) => {
  const params = {
    titulo,
    director,
    categoria: {
      id: categoriaId
    },
    duracion,
    enlace
  };
  console.log(params)

  const url = base_url + 'insert';
  console.log(url);

  try {
    const response = await axios.post(url, params);


    console.log(response.data);
    return response.data;

  } catch (error) {
    console.log('Error al insertar la pelicula');
    throw error;
  }
}


const obtenerPeliculas = async () => {
  const url = base_url + 'getAll';
  console.log(url);

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error al obtener las peliculas');
    throw error;
  }
}
const obtenerCategorias = async () => {
  const url = 'http://localhost:8080/categorias/getAll';
  console.log(url);

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error al obtener las categorias');
    throw error;
  }
}

const eliminarPelicula = async (id) => {
  const url = `${base_url}delete/${id}`;

  try {
    const response = await axios.delete(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la película:', error);
    throw error;
  }
}

const editarPelicula = async (id, titulo, director, duracion, enlace, categoriaId) => {
  const url = `${base_url}update`;

  const data = {
    id,
    titulo,
    director,
    categoria: {
      id: categoriaId
    },
    duracion,
    enlace
  };
  console.log(data);

  try {
    const response = await axios.put(url, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error al editar la película:', error);
    throw error;
  }
};



export default {
  crearPelicula, obtenerPeliculas, eliminarPelicula, editarPelicula, obtenerCategorias
};