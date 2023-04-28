import ListaTareas from '../EjemploLista/Lista';
import Boton from '../button/button';
import EjemploComponentefuncional from './EjemploComponentes/EjemploComponenteFuncional';
import EjemploComponenteClase from './EjemploComponentes/EjemploComponentesClase';
import './content.css';


const Content=()=>{
    return(
        <div className='content'>
            <EjemploComponenteClase/>
            <Boton/>
            <EjemploComponentefuncional nombre='Emanuel' edad={36}/>
            <ListaTareas/>
        </div>
    )
}

export default Content;