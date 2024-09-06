import React from 'react';
import '../styles/tarea.css'
import {AiFillCloseCircle} from "react-icons/ai";


function Tarea({id,texto, completada, completarT,borrarT}){
    return(
        <div className={completada? 'tarea-contenedor completada':'tarea-contenedor'}>
            <div className="tarea-texto" onClick={()=>completarT(id)}>
                
                {texto}
            </div>
            <div className="tarea-icono-contenedor" onClick={()=>borrarT(id)} >   
            <AiFillCloseCircle className="tarea-icono" color='black' size='2em'/> </div>
        </div>
    );
}
export default Tarea;