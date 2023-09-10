import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import AgregarPage from "../pages/AgregarPage";
import EliminarPage from "../pages/EliminarPage";

export default function Rutas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="agregar" element={<AgregarPage />} />
        <Route path="eliminar/:id" element={<EliminarPage />} />
      </Routes>
    </BrowserRouter>
  )
}