import platos from '../../data/sushi.json';
import Card from '../molecules/Card';
const Sushi = () => {
    return ( 
<div>
            <h2 className='titulo-seccion'>SUSHI</h2>
            {/* Recorremos todas las categorías */}
            {platos.sushi.map((categoria) => (
                <div key={categoria.category}>
                    <h3 className="titulo-categoria">{categoria.category}</h3>
                    <ul className='contenedor-card'>
                        {/* Recorremos los ítems dentro de cada categoría */}
                        {categoria.items.map((sushi) => (
                            <Card
                                key={sushi.id}
                                id={sushi.id}
                                nombre={sushi.nombre}
                                descripcion={sushi.descripcion}
                                precio={sushi.precio}
                                imagen={sushi.imagen} // Asegúrate de tener esta propiedad en el JSON
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
     );
}
 
export default Sushi;