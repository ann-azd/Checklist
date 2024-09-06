import React, { useState } from "react";
import Formulario from "./formulario.jsx";
import "../styles/listaT.css";
import Tarea from "./tarea.jsx";

function ListaTareas() {
  const [tareas, setTareas] = useState([]); // se le esta asignando a tareas un arreglo

  const agregarT = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };
  const eliminarT = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };
  const CompletarT = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  return (
    <>
      <Formulario onSubmit={agregarT} />
      <div className="lista-tareas-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            borrarT={eliminarT}
            completarT={CompletarT}
          />
        ))}
      </div>
    </>
  );
}
export default ListaTareas;
