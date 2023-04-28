function handleClick(event){
    event.preventDefault();
    alert('el boton esta presionado')
}

const Boton=()=>{
    return(
        <button onClick={handleClick}>click</button>
    )
}
export default Boton;