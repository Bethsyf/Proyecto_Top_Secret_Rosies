import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer';

function Products() {
  return (
    <div >
    <div className='ventas'>
      <h2 className="t_modulo">Gestión de productos</h2>         
      <div className="busqueda">        
        <select className="Opc_filtro">
          <option value="1">(Filtrar por)</option> 
            <option value="2">Id producto</option> 
            <option value="3">Valor unitario</option> 
            <option value="4">Estado</option>
        </select>

        <input className="id_user" type="text" name="user"></input>
        <button className="boton_buscar">Buscar</button>
        <Link to='/NewProducts'>
          <p className='L_Nuevo'>Nuevo producto</p>
        </Link> 
      </div>

      <div className="table_users">
      <table id="productTable">
            <thead>
                <th>ID producto</th>
                <th>Descripción</th>
                <th>Valor unitario</th>
                <th>Estado</th>
                <td></td>

            </thead>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Link to='/NewProducts'>
          <p className='L_Editar'>Editar</p>
        </Link>
 
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Link to='/NewProducts'>
          <p className='L_Editar'>Editar</p>
        </Link>
 
        </tr>

        <tr>
        </tr>
        </table>
        <Link to='/Products'>
          <p className='L_Actualizar'> Actualizar</p>
        </Link>
       

      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default Products;