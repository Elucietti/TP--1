import React from "react";

function EjemploComponentefuncional(props){
    return(
        <div>
            <h1>soy un componente funcional</h1>
            <p>soy {props.nombre} y tengo {props.edad} años</p>
            
        </div>
    )
}
export default EjemploComponentefuncional;