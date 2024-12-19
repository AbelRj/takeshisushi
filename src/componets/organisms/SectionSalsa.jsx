import { useEffect, useState } from 'react';
import salsa from '../../data/salsas.json';
import Cantidad from '../molecules/Cantidad';

const SectionSalsa = ({ setTotalSalsas, setSalsasSeleccionadas }) => {
    const [cantidad, setCantidad] = useState(
    salsa.salsas.reduce((acc, salsa) => {
                  acc[salsa.id] = 0; // Inicializar en 0 si no hay datos seleccionados
                  return acc;
              }, {})
    );

    const actualizarCantidad = (id, nuevaCantidad) => {
        setCantidad((prevCantidades) => ({
            ...prevCantidades,
            [id]: nuevaCantidad,
        }));
    };

    // Calcular el subtotal de todas las salsas
    const totalSalsas = salsa.salsas.reduce((total, salsa) => {
        return total + salsa.precio * cantidad[salsa.id];
    }, 0);

    // Crear el array de salsas seleccionadas
    const salsasActualizadas = salsa.salsas
        .filter((salsa) => cantidad[salsa.id] > 0) // Solo incluir salsas con cantidad > 0
        .map((salsa) => ({
            id: salsa.id,
            nombre: salsa.nombre,
            precio: salsa.precio,
            cantidad: cantidad[salsa.id],
        }));

    // Actualizar el array de salsas seleccionadas y el total en el componente padre
    useEffect(() => {
        setSalsasSeleccionadas(salsasActualizadas); // Enviar las salsas seleccionadas al padre
        setTotalSalsas(totalSalsas); // Enviar el total de salsas al padre
    }, [cantidad, totalSalsas]);

    return (
        <div>
            <div>Salsa</div>
            <ul className="contenedor-salsa">
                {salsa.salsas.map((salsa) => (
                    <div className="contenedor-salsa-2" key={salsa.id}>
                        <div className="contenedor-salsa-np">
                            <div>{salsa.nombre}</div>
                            <div>{salsa.precio}</div>
                            <div>Subtotal: ${salsa.precio * cantidad[salsa.id]}</div>
                        </div>
                        <Cantidad
                            cantidad={cantidad[salsa.id]}
                            setCantidad={(nuevaCantidad) => actualizarCantidad(salsa.id, nuevaCantidad)}
                            className="contenedor-cantidad-salsa"
                        />
                    </div>
                ))}
            </ul>
            <div>Total: ${totalSalsas}</div>
        </div>
    );
};

export default SectionSalsa;
