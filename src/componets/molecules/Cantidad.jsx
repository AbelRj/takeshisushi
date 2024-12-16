

const Cantidad = ({cantidad, setCantidad, className}) => {
    const incrementar = () => setCantidad(cantidad + 1); // Incrementar cantidad
    const decrementar = () => {
      if (cantidad > 0) setCantidad(cantidad - 1); // Evitar valores negativos
    };
    return (

        <div className={className}>
        <button onClick={decrementar}>-</button>
        <div>{cantidad}</div>
        <button onClick={incrementar}>+</button>
      </div>
      );
}
 
export default Cantidad;

