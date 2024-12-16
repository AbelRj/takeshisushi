import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import ProductoCarrito from "../molecules/ProductoCarrito";

const Carrito = () => {

    const { state } = useContext(CarritoContext); // Obtiene el estado del carrito desde el contexto

    if (state.cart.length === 0) {
        return <p>El carrito está vacío</p>;
    }

    return (
        <div className="contenedor-carrito">
            {state.cart.map((item) => (
                <ProductoCarrito
                    key={item.id}
                    imagen={item.imagen}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    cantidad={item.cantidad}
                    precio={item.precio}
                    sugerencia={item.sugerencia}
                    id={item.id}
                    subTotal={item.subTotal}

                />
            ))}
        </div>
    );
}

export default Carrito;