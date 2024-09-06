import React ,{useState} from 'react';
import '../styles/form.css'
import {v4 as uuidv4} from 'uuid'

function Formulario(props){

 const [input,setInput]=useState('');

const manejarCambio= e=>{
    setInput(e.target.value);
   
}


    const ManejarEnvio= e=>{
        e.preventDefault(); /*Esto hace que no se vuelva a cargar la pagina al mandar un formulario*/ 
        const tareaN={
            id:uuidv4(),
            texto:input,
            completada:false
        }
        props.onSubmit(tareaN); //enviar la nueva tarea
       
    }



    return(
    <form action="" className="tarea-formulario"  onSubmit={ManejarEnvio}>
        <input type='text' placeholder='Escribe tarea' name='texto' className='tarea-inp'
        onChange={manejarCambio} 
        />
        <button className='tarea-boton'
       
        >Agregar Tarea</button>
    </form>
    );
}
export default Formulario;