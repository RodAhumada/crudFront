import { useState } from "react";
import "../css/Agregar.css";
import { useNavigate } from "react-router-dom";

export default function Agregar() {

  const [usuario, setUsuario] = useState({
    rut:"",
    password:"",
    nombre:"",
    apPaterno:"",
    apMaterno:"",
    fono:0,
    mail:""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlSetUser = 'http://localhost:8000/user/';
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(usuario),
    };
    try {
      const createUser = await fetch(urlSetUser, requestOptions);
      const createUserJSON = await createUser.json();
      const data = await createUserJSON.mensaje;
      navigate(-1);
    } catch (error){
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({...prevState, [name]: value}));
  }

  return(
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h2 className="titulo-form">Formulario Agregar</h2>
        <div className="formulario">
          <div className="item">
            <label htmlFor="rut">RUT: </label>
            <input type="text" name="rut" id="rut" onChange={handleChange} value={usuario.rut} />
          </div>
          <div className="item">
            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" id="password" onChange={handleChange} value={usuario.password} />
          </div>
          <div className="item">
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" id="nombre" onChange={handleChange} value={usuario.nombre} />
          </div>
          <div className="item">
            <label htmlFor="apPaterno">Apellido Paterno: </label>
            <input type="text" name="apPaterno" id="apPaterno" onChange={handleChange} value={usuario.apPaterno} />
          </div>
          <div className="item">
            <label htmlFor="apMaterno">Apellido Materno: </label>
            <input type="text" name="apMaterno" id="apMaterno" onChange={handleChange} value={usuario.apMaterno} />
          </div>
          <div className="item">
            <label htmlFor="fono">Teléfono: </label>
            <input type="number" name="fono" id="fono" onChange={handleChange} value={usuario.fono} />
          </div>
          <div className="item">
            <label htmlFor="mail">Correo: </label>
            <input type="email" name="mail" id="mail" onChange={handleChange} value={usuario.mail} />
          </div>
        </div>        
        <div className="botones">
          <button type="submit" className="guardar">
            Guardar
          </button>
        </div>
      </form>      
    </div>
  )
}