import React from 'react';
import Item from './Item';
import data from "./data.json"; //1 Acá importamos la data 

// 1 Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// 2 El componente Listado es el padre de:
// 3 - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const info = data; //Almacenamos los datos en una constante

export default function Listado(props) {
  return (
    <div className='container'>
       {
      info.map( datos => {   

          return(     
            <Item   
             key={datos.id}
             nombre = {datos.producto.nombre} 
             detalle={datos.producto.descripcion}
             imagen={datos.producto.imagen} /// Quitar si falla 
             stocks={datos.stock}  
             contador = {props.contador}> 
             </Item>
          )
       })
     }
    </div>
  )
}
