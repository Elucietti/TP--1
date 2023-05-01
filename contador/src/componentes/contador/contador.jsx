import React,{useState, useEffect} from "react";

// const Contador=()=>{
//     const[count, setCount]=useState(0);

// function incrementar(){
//     setCount(count+1);
// }

// function decrementar (){
//     setCount(count-1)
// }

// return(
//     <div>
//         <h2>contador: {count}</h2>
//         <button onClick={incrementar}>incrementar</button>
//         <button onClick={decrementar}>decrementar</button>
//     </div>
// )
// }

const Contador = () =>{
    const[count, setCount]=useState(0);
    const[message,setMessage]=useState('');

    useEffect(()=>{
       
        setMessage=message=0?"hola":"chau";
        console.log("message"); 
        
    });
    return( 
        <div>
            <h1>contador: {count}</h1>
            <h2>mensaje: {message}</h2>
            <button onClick={()=>setCount(count+1)}>incrementar</button>
        </div>
    )
}

export default Contador;