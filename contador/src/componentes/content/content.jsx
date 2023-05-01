import ListaTareas from '../EjemploLista/Lista';
import Boton from '../button/button';
import EjemploComponentefuncional from './EjemploComponentes/EjemploComponenteFuncional';
import EjemploComponenteClase from './EjemploComponentes/EjemploComponentesClase';
import './content.css';
import Contador from '../contador/contador';
import Conversor from '../conversor/Conversor';
import {UserList} from '../lista/Lista';

const Content=()=>{
    return(
        <div className='content'>
    
            {/* <EjemploComponenteClase/> */}
            {/* <Boton/> */}
            {/* <EjemploComponentefuncional nombre='Emanuel' edad={36}/> */}
            {/* <ListaTareas/> */}
            <Contador/>
            {/* <Conversor/> */}
            {/* < UserList/> */}
        </div>
    )
} 

export default Content;