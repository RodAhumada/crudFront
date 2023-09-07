import { useEffect, useState } from "react";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import "../css/Listar.css";

export default function Listar() {
  const [usuarios, setUsuarios] = useState([]);

  
  
  const fetchAPI = async () => {
    const urlLista = 'http://localhost:8000/user/';
    try {
      const response = await fetch(urlLista);
      const responseJSON = await response.json();
      setUsuarios(responseJSON);
    } catch (error) {
      console.log("No se pueden obtener los usuarios:", error);
    }    
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return(
  <table className="tabla">
    <thead>
      <tr className="fila">
        <th>ID</th>
        <th>Rut</th>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Correo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    {
      usuarios?.map((data) => {
        return(
          <tbody key={data.id}>
            <tr className="fila">
              <td>{data.id}</td>
              <td>{data.rut}</td>
              <td>{data.nombre} {data.apPaterno} {data.apMaterno}</td>
              <td>{data.fono}</td>
              <td>{data.mail}</td>
              <td>
                <button className="button editar">
                  <FaPenToSquare />
                </button>
                <button className="button eliminar">
                  <FaTrashCan />
                </button>
              </td>
            </tr>            
          </tbody>
        )
      })
    }
  </table>    
  )
}