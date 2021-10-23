import axios from 'axios';

const baseURL = "powerful-eyrie-81914.herokuapp.com"

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;     //string literal

}

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = {
     method: 'GET', 
     url: `${baseURL}/products/`,
     headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/products/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/products/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/products/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Ventas

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET',
    url: `${baseURL}/sales/`,
    headers: {
      Authorization: getToken(),
    },
   };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/newSales/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/sales/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/sales/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//usuarios

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: `${baseURL}/configuration/`,
    headers: {
      Authorization: getToken(),
    },
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/configuration/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/configuration/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/configuration/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
