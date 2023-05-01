import React,{useState} from 'react';

function Conversor(){
    const[peso, setPeso] = useState('');

    const Convertir=(pesos)=>{
        const dolares=pesos/390;
        return dolares.toFixed(2);
    }

    return(
        <div>
            <h1>conversor de pesos a dolares</h1>
            <input 
            type="number" 
            value={peso}
            onChange={(e)=>setPeso(e.target.value)}
            style={{width:'12rem'}}
            />
            <h3>{peso ? '${peso} pesos equivalen a ${Convertir(peso)}dolares':'ingrese pesos a convertir'}</h3>
        </div>
    )
}

export default Conversor;