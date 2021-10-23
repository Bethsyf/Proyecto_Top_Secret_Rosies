import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;     //string literal

}

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = {
     method: 'GET', 
     url: 'http://localhost:5000/products/',
     headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/products/',
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/products/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/products/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Ventas

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET',
    url: 'http://localhost:5000/sales/',
    headers: {
      Authorization: getToken(),
    },
   };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/newSales/',
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/sales/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/sales/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//usuarios

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/configuration/',
    headers: {
      Authorization: getToken(),
    },
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/configuration/',
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/configuration/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/configuration/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
