
import platos from '../../data/comidaPeruana.json';
import Card from '../molecules/Card';
const ComidaPeruana = () => {
    
    return (
        
            <div>
                <h2 className='titulo-seccion'>PLATOS PERUANOS</h2>
                <ul className='contenedor-card'>
                    {platos.platos_peruanos.map((plato) => (
                        <Card
                        key={plato.id}
                        id={plato.id}
                        nombre={plato.nombre}
                        descripcion={plato.descripcion}
                        precio={plato.precio}
                        imagen={plato.imagen}/>
                    ))}
                </ul>
            </div>

    );
}

export default ComidaPeruana;