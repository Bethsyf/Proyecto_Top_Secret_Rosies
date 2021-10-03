import React from 'react';
import { Link } from 'react-router-dom';

function NewUser() {
  return (
    <>
    <div>
      <h1 className='t_modulo'> Gestión de usuarios</h1>
    </div>
    <div className="form">
      <div className="form-toggle"></div>
      <div lass="form-panel one">
        <div className="form-header">
          <h2>Nuevo Usuario</h2>
          <br></br>
          <h3>Ingrese los datos para crear un nuevo usuario</h3>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label for="ID">ID</label>
              <input type="text" id="ID" name="ID" required="required" />
            </div>

            <div className="form-group">
              <label for="Descrpcion">Descrpción</label>
              <input type="Descrpcion" id="Descrpcion" name="Descrpcion" required="required" />
            </div>

            <div className="form-group">
              <label for="Precio">Precio</label>
              <input type="Precio" id="Precio" name="Precio" required="required" />
            </div>

            <div className="form-group">
              <label for="Estado">Estado</label>
            </div>

            <div className="product-status">
              <select name="Estado">
                <option selected value="0">Elige una opción</option>
                <option value="1">Disponible</option>
                <option value="1">No Disponible</option>
                <option value="1">Oculto</option>
              </select>
            </div>

            <br></br>

            <div className="form-group">
              <button type="submit" onClick={event => alert(event.target.id)}>
              <p  id="Usuario Creado Exitosamente">Guardar información</p>
              </button>
            </div>

            <Link to='/Configuration'>
              <p className='L_Regresar'>Regresar</p>
            </Link>

          </form>
        </div>
      </div>

    </div>
    </>
  );
}

export default NewUser;