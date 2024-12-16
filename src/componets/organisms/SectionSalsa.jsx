import { useEffect, useState } from 'react';
import salsa from '../../data/salsas.json';
import Cantidad from '../molecules/Cantidad';

const SectionSalsa = ({setTotalSalsas }) => {
    const [cantidad, setCantidad] = useState(
        salsa.salsas.reduce((acc, salsa) => {
            acc[salsa.id] = 0; // Establecer cantidad inicial en 0 para cada salsa
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

    // Actualizar el total de las salsas en el componente padre
    useEffect(() => {
        setTotalSalsas(totalSalsas);
    }, [totalSalsas, cantidad]); // Se ejecuta cada vez que cambia la cantidad o el totalSalsas

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
        <div>{totalSalsas}</div>
    </div>
    );
};

export default SectionSalsa;

