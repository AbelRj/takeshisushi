import { useEffect, useState } from "react";
import Cantidad from "./Cantidad";


const ProductoCarrito = ({ id, imagen, nombre, descripcion, cantidad,  subTotal , precio}) => {
    const [cantidadProducto, setCantidadProducto] = useState(cantidad)
    const [newSubTotal, setNewSubTotal]= useState(subTotal)


    useEffect(() => {
        setNewSubTotal(cantidadProducto * precio);
    }, [cantidadProducto, precio]);
    return (

        <div>
            <img className="img-producto-carrito" src={`/${imagen}`} alt={nombre} />
            <div className="contenedor-producto-carrito">
                <p>{nombre}</p>
                <p className="producto-carrito-descripcion">{descripcion}</p>
                <div className="contenedor-cantidad-precio">
                    <Cantidad cantidad={cantidadProducto}  setCantidad={setCantidadProducto}
                    className='contenedor-carrito-btn-cantidad'/>
                    <div>Precio: ${precio}</div>
                    <div>Subtotal: ${newSubTotal}</div>
                    
                    <button className="carrito-btn-eliminar">Eliminar</button>
                </div>
            </div>

        </div>
    );
}

export default ProductoCarrito;