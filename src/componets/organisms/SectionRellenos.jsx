import { useState, useEffect } from 'react';
import rellenos from '../../data/rellenos.json';
import Relleno from '../molecules/Relleno';

const SectionRellenos = () => {
  const [seleccionados, setSeleccionados] = useState({});

  // Loguear seleccionados en consola
  useEffect(() => {
    const seleccionadosProductos = Object.entries(seleccionados)
      .filter(([id, checked]) => checked) // Filtrar solo los seleccionados
      .map(([id]) => {
        // Buscar información del producto
        const producto = rellenos.rellenos
          .flatMap((categoria) => categoria.productos)
          .find((p) => p.id === Number(id));
        return producto;
      });

    console.log('Productos seleccionados:', seleccionadosProductos);
  }, [seleccionados]);

  return (
    <div>
      <div>Selecciona tus extras</div>
      <ul>
        {rellenos.rellenos.map((categoria) => (
          <div key={categoria.categoria} className="categoria">
            {/* Mostrar el nombre de la categoría */}
            <div className="titulo-categoria">{categoria.categoria}</div>
            {categoria.productos.map((producto) => (
             <Relleno 
             key={producto.id}
             id={producto.id}
             nombre={producto.nombre}
             precio={producto.precio}
             seleccionados={seleccionados}
             setSeleccionados={setSeleccionados}/>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SectionRellenos;
